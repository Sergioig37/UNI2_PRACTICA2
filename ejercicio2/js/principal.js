import Grupo from "./grupo.js";
import Instituto from "./instituto.js";

var fleming = new Instituto("CB194", "Fleming");
var grupo1 = new Grupo("324132r", 40);
var grupo2 = new Grupo("32657", 40);
var grupo3 = new Grupo("132r", 20);
var grupo4 = new Grupo("41r",50);
console.log(fleming.conocerNumeroTotalAlumnos());
console.log(fleming.CodigoInstituto);
fleming.addGrupos(grupo1);
console.log(fleming.conocerNumeroTotalAlumnos());
fleming.addGrupos(grupo2);
fleming.addGrupos(grupo3);
fleming.addGrupos(grupo4);
console.log(fleming.conocerNumeroTotalAlumnos())