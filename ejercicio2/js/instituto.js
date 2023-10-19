export default class Instituto{
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
    set CodigoInstituto(codigoInstituto){
         this._codigoInstituto = codigoInstituto;
    }

    addGrupos(grupo){
        this._gruposInstituto.push(grupo);
    }

    conocerNumeroTotalAlumnos(){
        var totalAlumnos = 0;
        if(this.GruposInstituto.length!=0){
             this._gruposInstituto.forEach(grupo => {
            totalAlumnos += grupo.NumeroAlumnos;
        });
        }
        return totalAlumnos;
    }
}