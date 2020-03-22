import ruta1 from './route1.json';
import ruta2 from './route2.json';
import Ruta from './ruta.js';
import bajarRutas from '../../DownloadRoutes/bajarRutas';

class Rutas{

    constructor(){
        this.rutas = [new Ruta(ruta1),new Ruta(ruta2)];
    }

    getNames(){
        if(bajarRutas.rutas.length > 0)  {
        console.log("ruta1: "+bajarRutas.rutas[0]);
        var rutatmp = JSON.parse(bajarRutas.rutas[0]);
        console.log(rutatmp);
        this.rutas = [new Ruta(rutatmp)];
    }
    console.log(ruta1);
        let rutasName = [];
        this.rutas.map(r => rutasName.push(r.name));
        return rutasName;
    }

    getRutaByName(newName){
        var exit;
        this.getRutaByPosition( this.rutas.forEach((r)=> {if(r.name == newName){exit=r}}));
        return exit; 
        
    }

    getRutaByPosition(p){
        return this.rutas[p];
    }
}


export default Rutas = new Rutas();