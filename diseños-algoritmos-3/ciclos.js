/*
Ciclos - Bucles - Loops

while
do while 
for 
*/

//while
/* 
Let condicion =  1; - valor inicial
while (condicion){
    tu codigo
    modificacion a nuestro valor inicial
}

*/

 /*
 Imprimir todos los numeros del 1 al 10
*/
/*
let condicion = 1; //condicion se puede hacer mas corta 

while (condicion <= 10) {
    console.log(condicion);
    condicion++; //condicion se puede hacer más corta
    //condicion ++;
}
*/
/*
let numero = 1;
numero++; //2 numero = numero + 1
numero++; //3
numero++; //4
numero--; //3
numero--; //2
numero--; //1
console.log(numero);
*/

/*
do while 
imprimir todos los numeros del 1 - 10
*/
//do while
let numero = 11;
/*
 do{
     console.log(numero);
     numero++;
 } while (numero <= 10);
*/
/*
CICLO FOR 
*/
/*
for (let control = 1; control <= 10; control ++) {
    console.log(control);
}
*/

const comidas = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];
for (let i = 0; i <= comidas.length; i++) {
    console.log(comidas);

}