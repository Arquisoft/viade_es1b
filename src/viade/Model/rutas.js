import ruta1 from './route1.json';
import Ruta from './ruta.js';
import bajarRutas from '../../services/bajarRutas';

class Rutas {

    constructor() {
        this.rutas = [new Ruta(ruta1)];
    }

    actualizarRutasConPod() {
        if (bajarRutas.rutas.length > 0) {
            // console.log(this.rutas);            
            //console.log(bajarRutas.rutas.length);
            /*
           while (this.rutas.length > 0) {
                this.rutas.pop();
            }            
            */
            while (bajarRutas.rutas.length !== 0) {
                this.rutas.push(new Ruta(bajarRutas.rutas.pop()));                
            }
            // Esta funcion elimina duplicados por nombre
            this.rutas = this.rutas.filter((ruta, index, self) =>
            index === self.findIndex((t) => (
                t.place === ruta.place && t.name === ruta.name
            ))
            )
            //console.log(this.rutas);
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