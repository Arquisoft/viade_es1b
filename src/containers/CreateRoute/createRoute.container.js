import React from 'react';
import L from 'leaflet';
import { useTranslation } from 'react-i18next';
import { TileLayer, Marker, Polyline } from 'react-leaflet';
import { MapStyle, DivStyle, InputStyle, ButtonStyle, ButtonStyle2, ChooseButton } from './createRoute.style';
import CreateRouteService from '../../services/CreateRouteService';
import { NotificationManager, NotificationContainer } from "react-notifications";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Createc = props => {
  const { t } = useTranslation();
  class CreateRoute extends React.Component {

    constructor() {
      super();
      this.state = {
        markers: [],
        name: "",
        images: [],
        videos: [],
        center: {
          lat: 43.3551061,
          lng: -5.8512792,
        }
      };
    }

    mapClick = (e) => {
      const { markers } = this.state;
      markers.push({ lat: e.latlng.lat, lng: e.latlng.lng })
      this.setState({ markers })
      this.draw();
    }

    draw() {
      let points = [];
      for (let i = 0; i < this.state.markers.length; i++)
        points.push({ lat: this.state.markers[i].lat, lng: this.state.markers[i].lng })
      return points;
    };

    updateValue = (n) => {
      var { name } = this.state;
      name = document.getElementById('name').value;
      this.setState({ name });
      console.log(name);
    }

    sendData = () => {
      var { name } = this.state;
      const { markers } = this.state;
      if (name.length === 0)
        NotificationManager.error("", t('map.lenght'), 3000);
      if (markers.length <= 1)
        NotificationManager.error("", t('map.twopoints'), 3000);
      if (name.length !== 0 && markers.length > 1) {
        CreateRouteService.createRoute(name, markers, this.state.images, this.state.videos, t('map.photo_success'), t('map.photo_fail'), t('map.video_success'), t('map.video_fail'), t('map.logged'), t('map.success_upload'));
      }
    }

    clear() {
      window.location.reload();
    }

    addImage(imageList) {
      for (let i = 0; i < imageList.length; i++)
        this.state.images.push(imageList[i]);
      console.log(imageList);
      console.log(this.state.images);
    }

    addVideo(videoList) {
      for (let i = 0; i < videoList.length; i++)
        this.state.videos.push(videoList[i]);
      console.log(videoList);
      console.log(this.state.videos);
    }

    render() {
      return (
        <React.Fragment>
          <NotificationContainer />
          <DivStyle>
            <InputStyle data-testid="name-input" id="name" type="text" placeholder={t('map.placeholder2')} ref={this.name} onChange={this.updateValue} />
            <ChooseButton data-testid="upload-images-button">
              <input type="file" id="photo" name="image" accept="image/*" multiple={true} onChange={(e) => this.addImage(e.target.files)} />
              <label id="label-input" htmlFor="photo">
                <img src={process.env.PUBLIC_URL + "/img/icon/photo.svg"} width="30" height="31" alt="" />
                <span>{t('map.photos')}</span>
              </label>
            </ChooseButton>
            <ChooseButton data-testid="upload-videos-button">
              <input type="file" id="video" name="video" accept="video/*" multiple={true} onChange={(e) => this.addVideo(e.target.files)} />
              <label id="label-input" htmlFor="video">
                <img src={process.env.PUBLIC_URL + "/img/icon/videocamera.svg"} width="30" height="31" alt="" />
                <span>{t('map.videos')}</span>
              </label>
            </ChooseButton>
            <ButtonStyle data-testid="upload-button" onClick={this.sendData} ><img src={process.env.PUBLIC_URL + "/img/icon/upload.svg"} width="20" height="20" alt="" /> {t('map.upload')}</ButtonStyle>
            <ButtonStyle2 data-testid="clear-button" onClick={this.clear}> <img src={process.env.PUBLIC_URL + "/img/icon/cross.svg"} width="20" height="20" alt="" /> </ButtonStyle2>
          </DivStyle>
          <MapStyle id="map" center={this.state.center} zoom={15} onClick={this.mapClick}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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

  return (<CreateRoute />);
};

export default Createc;
