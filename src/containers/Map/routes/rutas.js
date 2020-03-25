import ruta1 from './route1.json';
import ruta2 from './route2.json';
import Ruta from './ruta.js';
import bajarRutas from '../../Download/bajarRutas';

class Rutas {

    constructor() {
        this.rutas = [new Ruta(ruta1), new Ruta(ruta2)];
    }
    
    actualizarRutasConPod() {
        if(bajarRutas.rutas.length > 0)  {
            console.log(this.rutas);
            console.log(bajarRutas.rutas.pop());
            //this.rutas.push(bajarRutas.rutas.pop());
    }
}   

    getNames() {
        let rutasName = [];
        this.rutas.map(r => rutasName.push(r.name));
        return rutasName;
    }

    getRutaByName(newName) {
        var exit;
        this.getRutaByPosition(this.rutas.forEach((r) => { if (r.name === newName) { exit = r } }));
        return exit;

    }

    getRutaByPosition(p) {
        return this.rutas[p];
    }

}


export default Rutas = new Rutas();