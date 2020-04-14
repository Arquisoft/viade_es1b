import React from "react";
import L from "leaflet";
import { TileLayer, Marker, Polyline } from "react-leaflet";
import { MapStyle, DivStyle, InputStyle, ButtonStyle, ButtonStyle2, ChooseButton } from "./createRoute.style";
//import createJson from '../../viade/ParserRoute/Parsers/RDF/route-to-JSON';
import CreateRouteService from "../../services/CreateRouteService";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

class createRoute extends React.Component {

  constructor() {
    super();
    this.state = {
      markers: [],
      name: "",
      images: [],
      videos:[]
    };
    
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
        })
      },
        (error) => {
          this.setState({
            center: {
              lat: 43.3551061,
              lng: -5.8512792,
            }
          })

        });
    }


  }

  mapClick = (e) => {
    const { markers } = this.state;
    markers.push({ lat: e.latlng.lat, lng: e.latlng.lng });
    this.setState({ markers });
    this.draw();

  }

  draw() {
    let points = [];
    for (let i = 0; i < this.state.markers.length; i++)
    {
      points.push({ lat: this.state.markers[i].lat, lng: this.state.markers[i].lng })
    }
    return points;
  }

  updateValue = (n) => {
    var { name } = this.state;
    name = document.getElementById('name').value;
    this.setState({ name });
    //console.log(name);
  }

  sendData = () => {
    var { name } = this.state;
    const { markers } = this.state;
    if (name.length === 0)
      alert("La ruta tiene que tener un nombre");
    if (markers.length <= 1)
      alert("La ruta tiene que tener al menos 2 puntos");
    if (name.length !== 0 && markers.length > 1) {
      alert("Ruta guardada correctamente");
      CreateRouteService.createRoute(name, markers, this.state.images, this.state.videos);
      //createJson.createJson(name, markers);
    }

  }

  clear() {
    window.location.reload();
  }

  addImage(imageList){
    for (let i =0; i<imageList.length; i++){
      this.state.images.push(imageList[i]);
    }
    console.log(imageList);
    console.log(this.state.images);
  }

  addVideo(videoList){
    for (let i =0; i<videoList.length; i++){
      this.state.videos.push(videoList[i]);
    }
    console.log(videoList);
    console.log(this.state.videos);
  }

  render() {
    this.getLocation();
    return (
      <React.Fragment>
        
          <DivStyle>
            <InputStyle id="name" type="text" placeholder="Write route name..." ref={this.name} onChange={this.updateValue} />
            <ButtonStyle onClick={this.sendData} ><img src={process.env.PUBLIC_URL + "/img/icon/upload.svg"} width="20" height="20" alt="" /> </ButtonStyle>
            <ButtonStyle2 onClick={this.clear}> <img src={process.env.PUBLIC_URL + "/img/icon/cross.svg"} width="20" height="20" alt="" /> </ButtonStyle2>
            <ChooseButton>
              <center>
                <input type="file" id="photo" name="image" accept="image/*" multiple={true} onChange={(e) => this.addImage(e.target.files)}/>
									<label id="label-input" htmlFor="photo">
										<span>Elegir fotos</span>
									</label>
              </center>
            </ChooseButton>
            <ChooseButton>
              <center>
                <input type="file" id="video" name="video" accept="video/*" multiple={true} onChange={(e) => this.addVideo(e.target.files)}/>
									<label id="label-input" htmlFor="video">
										<span>Elegir videos</span>
									</label>
              </center>
            </ChooseButton>
          </DivStyle>
          <MapStyle id="map" center={this.state.center} zoom={15} onClick={this.mapClick}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {this.state.markers.map((position, idx) =>
              <Marker key={`marker-${idx}`} position={position}>
              </Marker>
            )}
            <Polyline
              positions={this.draw()}
            />
          </MapStyle>
        
      </React.Fragment>

    );
  }
}

export default createRoute;
