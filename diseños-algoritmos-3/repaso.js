/*
Arreglos
*/

const comidas = ['Pozole', 'Quesadillas', 'Tacos']

/*
Length
*/

console.log(comidas.length);

/*
push  - agrega al final
pop  - quita un elemento del final 
unshift -agrega al inicio
shift  - quita un elemento del inicio
*/
comidas.push('Torta');
console.log(comidas);

comidas.unshift ('Pancita');
console.log(comidas);

/*
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
*/

comidas.forEach(function(el){
    console.log(el);
})

const numeros = [1, 4, 7, 8];
numeros.forEach(function(el){
    let suma = el + 1;
    console.log (suma);
})
console.log(numeros);

/* ejercicio */
const arr = [];

function suma(num){
    let sumNum = num + 1;
    return arr.push(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);

console.log(arr);