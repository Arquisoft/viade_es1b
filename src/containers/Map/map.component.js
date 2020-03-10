import React from "react";
import { MapStyle } from './map.style';
import { Ruta } from '@components';
import { TileLayer } from "react-leaflet";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

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
          <Ruta></Ruta>
        </MapStyle>
      </React.Fragment>

    );
  }
}


export default MapContainer;