function separarNumeros(){

    var numero = 1;
    var numeros = [];
    parseInt(numero);
    for(let i=0; i<arguments.length;i++){
        if(!isNaN(arguments[i])){
            numeros.push(arguments[i]);
        }
    }
    return numeros;
}

console.log(separarNumeros("Hola"));
console.log(separarNumeros("Hola", "Adiós"));
console.log(separarNumeros("Hola", "Adiós", 123));
console.log(separarNumeros("Hola", "Adiós", 123, "22222"));
console.log(separarNumeros("Hola", "Adiós", 123, "22222", 454345));
