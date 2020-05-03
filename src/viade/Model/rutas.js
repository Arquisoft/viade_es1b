import ruta1 from "./route1.json";
import Ruta from "./ruta.js";
import bajarRutas from "../Routes/bajarRutas";

class Rutas {
  constructor() {
    this.rutas = [new Ruta(ruta1)];
    this.hayRuta = false;
  }

  actualizarRutasConPod() {
    //nuevo metodo
    this.checker(bajarRutas.rutas, this.hayRuta, this.rutas);
  }

  checker(bRutas, hay, rutas) {
    if (bRutas.length > 0) {
      if (!hay) {
        rutas.pop();
        hay = true;
      }

      while (bRutas.length !== 0) {
        rutas.push(new Ruta(bRutas.pop()));
      }
      // Esta funcion elimina duplicados por nombre
      rutas = rutas.filter(
        (rutaf, index, self) =>
          index ===
          self.findIndex((t) => t.place === rutaf.place && t.name === rutaf.name)
      );
    }
  }

  vaciarRutas() {
    this.rutas = [];
  }

  getNames() {
    if (this.rutas.length === 0) {
      this.rutas.push(new Ruta(ruta1));
    }
    let rutasName = [];
    this.rutas.map((r) => rutasName.push(r.name));
    return rutasName;
  }

  getRutaByName(newName) {
    var exit;
    this.getRutaByPosition(
      this.rutas.forEach((r) => {
        if (r.name === newName) {
          exit = r;
        }
      })
    );
    return exit;
  }

  getRutaByPosition(p) {
    return this.rutas[p];
  }
}

export default Rutas = new Rutas();
