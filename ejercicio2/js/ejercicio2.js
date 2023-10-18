class Instituto{
    constructor(codigoInstituto, nombre){
        this._codigoInstituto = codigoInstituto;
        this._nombre = nombre;
        var gruposInstituto = [];
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
        gruposInstituto.push(grupo);
    }

}




class Grupo{
    constructor(nombre, numeroAlumnos){
        this._nombre = nombre;
        this._numeroAlumnos = numeroAlumnos;
    }
    get Nombre(){
        return this._nombre;
    }
    get numeroAlumnos(){
        return this._numeroAlumnos;
    }

    set Nombre(nombre){
         this._nombre = nombre;
    }
    set numeroAlumnos(numeroAlumnos){
         this._numeroAlumnos = numeroAlumnos;
    }
}

