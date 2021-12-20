/*
Tomas los numeros de un arreglo llamado 'numeros'
[1,4,7,9,19,15,46,27,40,123]
-Multiplicar cada numero por dos
-Guardar los resultados en un arreglo llamado 'resultado'
-Imprimir en consola o en el body cada elemento del arreglo 'resultado'
*/

const numeros = [1,4,7,9,19,15,46,27,40,123];
const resultado = [];

for (let multiplicacion = 0; multiplicacion < numeros.lenght; multiplicacion++);{
    //numeros
    resultado.push (numeros [multiplicacion]*2);
    console.log(resultado [multiplicación]);   
}

console.log (resultado);