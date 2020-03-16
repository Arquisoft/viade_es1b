import React from "react";
import { Marker, Popup } from "react-leaflet";

const Ruta = props => {
      return (
        <div>
        
        <Marker position={[props.lat, props.long ]}>
           <Popup>
            {props.Popup}
           </Popup>
        </Marker>
        
        </div>
      );
    
  }
  
  export default Ruta;