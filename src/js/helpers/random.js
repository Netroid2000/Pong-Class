/* cree esto debido a que no encontre una manera de
retornar un numero random entre un grupo de numeros 
especificos*/

//Arreglo de polaridades
let polaridades = [1,-1];

//Retorna una polaridad al azar
function randomPolarity(){
    let polaridad = polaridades[Math.floor((Math.random() * 2))];
    return polaridad;
}