class Instituto{
    constructor(codigoInstituto, nombre){
        this._codigoInstituto = codigoInstituto;
        this._nombre = nombre;
        this._gruposInstituto = [];
    }

    get Nombre(){
        return this._nombre;
    }
    get CodigoInstituto(){
        return this._codigoInstituto;
    }

    get GruposInstituto(){
        return this._gruposInstituto;
    }
    set Nombre(nombre){
         this._nombre = nombre;
    }
    set codigoInstituto(codigoInstituto){
         this._codigoInstituto = codigoInstituto;
    }

    addGrupos(grupo){
        this._gruposInstituto.push(grupo);
    }

    conocerNumeroTotalAlumnos(){
        var totalAlumnos = 0;

        this._gruposInstituto.forEach(grupo => {
            totalAlumnos += grupo.numeroAlumnos;
        });
        return totalAlumnos;
    }
}




class Grupo{
    constructor(codigoGrupo, numeroAlumnos){
        this._codigoGrupo = codigoGrupo;
        this._numeroAlumnos = numeroAlumnos;
    }
    get CodigoGrupo(){
        return this._nombre;
    }
    get numeroAlumnos(){
        return this._numeroAlumnos;
    }

    set CodigoGrupo(codigoGrupo){
         this._codigoGrupo =codigoGrupo;
    }
    set numeroAlumnos(numeroAlumnos){
         this._numeroAlumnos = numeroAlumnos;
    }


}


var fleming = new Instituto("CB194", "Fleming");
var grupo1 = new Grupo("324132r", 40);
var grupo2 = new Grupo("32657", 40);
var grupo3 = new Grupo("132r", 20);
var grupo4 = new Grupo("41r",50);
console.log(fleming.CodigoInstituto);
fleming.addGrupos(grupo1);
console.log(fleming.conocerNumeroTotalAlumnos());
fleming.addGrupos(grupo2);
fleming.addGrupos(grupo3);
fleming.addGrupos(grupo4);
console.log(fleming.conocerNumeroTotalAlumnos())