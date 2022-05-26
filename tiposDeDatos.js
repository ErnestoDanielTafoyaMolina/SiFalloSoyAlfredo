//tipos de datos en JS
//String: Cadena de caracteres .'a' "a"
//Boolean: true, false
//Null: Nulo
//Number: 1234--- 
//123 !="123"
//Undefined: no está definido
//Object: objeto, agrupa estructuras de datos

//variables
// var:forma primitiva de definir una variable y globales
// let: variables de alcance limitado
// const: no cambian su valor

//var miPrimerVariable='lala'
let miPrimerVariable='Mi primera variable';

//mutabilidad
miPrimerVariable='EL valor cambio';
console.log(miPrimerVariable);
//boolean
let miBoolean=true;
let miOtroBool=false;
//number
let miNumero=0
let miNumero2=12
let miNumero3=-258

//sin definir
let Undef
console.log(Undef)

let nulo=null

console.log(nulo)
console.log(miNumero,miNumero2,miNumero3,miBoolean,miPrimerVariable)

//objetos
//Es una agrupacion de daros que hacen sentido entre si y no tienen valores si no propiedades

//objeto vacio
const miPrimerObjeto={}

//objeto
const miObjeto={
    unNumero:12,
    unString:'Esta cadena de caracteres',
    unaCondicion:true,
}
console.log(miObjeto.unString);

//arreglos
const arrVacio=[];
const arr=[1,2,'hola','mundo',miObjeto];


//agregar elementos al arreglo
arrVacio.push(5)
arrVacio.push(4)
arrVacio.push(3)
arrVacio.push('Hola')
arrVacio.push(miPrimerVariable)
console.log(arrVacio)