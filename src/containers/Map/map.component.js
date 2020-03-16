import React from "react";
import L from 'leaflet';
import { MapStyle } from './map.style';
import { Ruta, Download } from '@components';
import { TileLayer } from "react-leaflet";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    height: 500,
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Prueba ${index + 1}`} />
    </ListItem>
  );
}

function DataDownload() {
  const $rdf = require('rdflib');

  const store  = $rdf.graph();
  const fetcher =new $rdf.Fetcher(store);
  const me = store.sym('https://uo265135.inrupt.net/public');
  const profile = me.doc()

  const VCARD = new $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
  const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
  const LDP = $rdf.Namespace('http://www.w3.org/ns/ldp#');

  store.add(me, VCARD('fn'),me, profile);
  let name = store.any(me, VCARD('fn')) || store.any(me, FOAF('name'));
  fetcher.load(profile).then(response => {
   console.log(name || "wot no name?");
 }, err => {
    console.log('Load failed ' +  err);
 });
 
 fetcher.load(me).then(() => {
   let file = store.any(me, LDP('contains'));
   console.log(file);
   console.log(me + ' contains ' + file);
  
 });
  return (<div></div>)
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

class MapContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      lat: 43.354444,
      lng: -5.85166,
      zoom: 12
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];    
    return (
      <React.Fragment>
        <FixedSizeList height={500} width={"25%"} itemSize={46} itemCount={200}>
          {renderRow}
        </FixedSizeList>
        <MapStyle center={position} zoom={12}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />            
          <Ruta lat={43.354444} long={-5.85166} Popup={"ruta 1"}/>
          <Ruta lat={39.124232} long={-3.55166} Popup={"ruta 2"}/>
          <DataDownload />
        </MapStyle>
      </React.Fragment>

    );
  }
}



export default MapContainer;