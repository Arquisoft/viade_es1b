import React from "react";
import L from "leaflet";
import { TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import { Rutas } from "../../viade/Model";
import { useWebId } from "@solid/react";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import {
  MapStyle,
  DivStyle,
  LiStyle,
  H3Style,
  LiStyle2,
  InputStyle,
  AmigosDiv,
  DivStyle3,
  DivStyle4,
  ButtonStyle,
  MediaDiv,
  DivStyle1,
} from "./map.style";
import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import bajarRutas from "../../services/bajarRutas";
import addFriend from "../../viade/Friends/addFriend";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { sharing } from "../../services/shareRoutes";
import { useNotification } from "@inrupt/solid-react-components";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Mapac = (props) => {
  const { t } = useTranslation();
  const webID = useWebId();
  const { createNotification, discoverInbox } = useNotification(webID);

  const sendNotification = async (
    titles,
    friendId,
    summary,
    inboxFail,
    inboxerror,
    name
  ) => {
    var names = webID.split(".");
    var shortName = names[0];
    shortName = shortName.replace("https://", "");
    alert(shortName);
    try {
      const inbox = await discoverInbox(friendId);
      if (!inbox) NotificationManager.error("", inboxFail, 3000);
      createNotification(
        {
          title: titles,
          summary: shortName + summary + ": " + name,
          actor: webID,
        },
        inbox
      );
    } catch (error) {
      NotificationManager.error("", inboxerror, 3000);
    }
  };

  class Lista extends React.Component {
    state = { count: 0 };
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState(({ count }) => ({ count: count + 1 }));
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    getRoutes(id) {
      var newRuta = Rutas.getRutaByName(id);
      if (id !== "Ruta") {
        if (newRuta.media.length >= 1 || newRuta.media !== undefined) {
          (() => {
            var str = "<List>";
            newRuta.media.forEach(function (archivo) {
              var stringJSON = JSON.stringify(archivo);
              var archivoURLFull = stringJSON
                .slice(8, stringJSON.length - 2)
                .toString();
              // Por los espacios
              var archivoURL = archivoURLFull.replace(" ", "%20");
              var nombreArchivo = archivoURL
                .split("/")
              [archivoURLFull.split("/").length - 1].replace("%20", " ");
              str +=
                '<p><a target="_blank" rel="noopener noreferrer" href=' +
                archivoURL +
                ">" +
                nombreArchivo +
                "</a></p>";
            });
            str += "</List>";
            try {
              document.getElementById("listMedia").innerHTML = str;
            } catch (e) {
              str = "<List>";
            }
          })();
        }
      } else {
        var str = "<List>Sin archivos</List>";
        document.getElementById("listMedia").innerHTML = str;
      }
      document.getElementById("name").textContent = newRuta.name;
      this.puntos = newRuta.point;
      const position = this.puntos[0];
      var update = (
        <MapStyle id="map" center={position} zoom={15}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Polyline color={"red"} positions={this.puntos}></Polyline>
          <Marker position={this.puntos[0]}>
            <Popup>Inicio</Popup>
          </Marker>
          <Marker position={this.puntos[this.puntos.length - 1]}>
            <Popup>Fin</Popup>
          </Marker>
        </MapStyle>
      );
      ReactDOM.render(update, document.getElementById("map"));
    }

    render() {
      return (
        <DivStyle3>
          <LiStyle2 data-testid="map-routes-list" id="lista">
            {Rutas.getNames().map((n, i) => (
              <LiStyle key={i} onClick={() => this.getRoutes(n)}>
                <img
                  src={process.env.PUBLIC_URL + "/img/icon/start.svg"}
                  width="25"
                  height="25"
                  alt=""
                />{" "}
                {n}
              </LiStyle>
            ))}
          </LiStyle2>
        </DivStyle3>
      );
    }
  }

  class Map extends React.Component {
    constructor() {
      super();
      this.state = {
        sfc: new SolidFileClient(auth),
        direccion: "",
        rutas: [],
        rutaActual: null,
      };
      // Bind es necesario para usar el this
      this.obtenerCarpetaPod = this.obtenerCarpetaPod.bind(this);
      this.name = Rutas.getNames()[0];
      this.puntos = [];
      Rutas.getRutaByPosition(0).points.map((p) =>
        this.puntos.push(p.getCoordinates())
      );
    }

    shareRoute = (docId) => {
      var routeName = document.getElementById("name").textContent;
      if (routeName === "Ruta") {
        NotificationManager.success("", t("map.demo"), 3000);
      } else {
        try {
          var friendID = document.querySelector("input[name = food]:checked")
            .value; //sacamos el amigo seleccionado
          var aux = webID.replace("profile/card#me", "");
          let routeAddress = aux + "viade/routes/" + routeName + ".json";
          let folderAddress = "viade/share/" + routeName + ".json";
          sharing(
            friendID,
            routeAddress,
            folderAddress,
            t("map.shareSuccess"),
            t("map.shareError"),
            t("map.double")
          ).then((ret) => {
            if (ret === 1) {
              sendNotification(
                t("notifications.titleShare"),
                friendID,
                t("notifications.summaryShare"),
                t("notifications.inboxFail"),
                t("notifications.error"),
                routeName
              );
            }
          });
        } catch (error) {
          NotificationManager.error("", t("map.friend"), 3000);
        }
      }
    };

    async obtenerCarpetaPod(parameter) {
      parameter.persist();
      let session = await auth.currentSession();
      var id = `${session.webId}`;
      id = id.replace("/profile/card#me", "/" + parameter.target.value);
      if (session) {
        this.setState({ direccion: id });
      }
    }

    getLista = (docId) => {
      this.setState({ requirementKey: Math.random() });
    };

    render() {
      var friends = [];
      (async () => {
        try {
          friends = await addFriend.friends;
          var str = "<List>";
          friends.forEach(function (friend) {
            str +=
              '<li style="list-style-type: none;"><input name="food" type="radio" value=' +
              friend +
              ' id = "radio">' +
              friend +
              "</li>";
          });
          str += "</List>";

          document.getElementById("listaMap").innerHTML = str;
        } catch (e) {
          friends = [];
        }
      })();
      Rutas.actualizarRutasConPod();
      const position = this.puntos[0];
      return (
        <DivStyle1>
          <DivStyle>
            <NotificationContainer />
            <H3Style data-testid="map-title" id="name">
              {this.name}
            </H3Style>
            <InputStyle
              data-testid="download-input"
              id="download-input"
              type="text"
              onChange={this.obtenerCarpetaPod}
              placeholder={t("map.placeholder1")}
            />
            <button
              data-testid="download-button"
              id="download-button"
              onClick={() =>
                bajarRutas.bajarRutasDePod(
                  this.state.direccion,
                  t("map.success_message"),
                  t("map.failed_message"),
                  t("map.empty_string_message"),
                  t("map.empty_message")
                )
              }
            >
              {t("map.download")}{" "}
              <img
                src={process.env.PUBLIC_URL + "/img/icon/download.svg"}
                width="25"
                height="20"
                alt=""
              />{" "}
            </button>
            <button id="refresh-button" onClick={this.getLista}>
              {" "}
              <img
                src={process.env.PUBLIC_URL + "/img/icon/refresh.svg"}
                width="25"
                height="20"
                alt=""
              />
              {t("map.refresh")}{" "}
            </button>
            <Lista />
            <H3Style>{t("friends.share")}</H3Style>
            <AmigosDiv>
              <DivStyle4 id="listaMap"></DivStyle4>
            </AmigosDiv>
            <ButtonStyle onClick={this.shareRoute}>
              {" "}
              <img
                src={process.env.PUBLIC_URL + "/img/icon/share.svg"}
                width="25"
                height="20"
                alt=""
              />
              {t("map.shareB")}{" "}
            </ButtonStyle>
            <H3Style>{t("map.listMedia")}</H3Style>
            <MediaDiv>
              <DivStyle4 id="listMedia"></DivStyle4>
            </MediaDiv>
          </DivStyle>
          <MapStyle id="map" center={position} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapStyle>
        </DivStyle1>
      );
    }
  }

  return <Map />;
};
export default Mapac;
