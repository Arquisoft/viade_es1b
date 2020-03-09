import React from "react";
import { Marker, Popup } from "react-leaflet";

const Ruta =()=> {
      return (
        <div>
        
        <Marker position={[43.354444, -5.85166 ]}>
           <Popup>
            This is an example
           </Popup>
        </Marker>
        </div>
      );
    
  }
  
  export default Ruta;