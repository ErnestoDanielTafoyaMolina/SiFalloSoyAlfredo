//funciones

function suma(a,b){
    return a + b;
}

const resultadoSuma1= suma(1,2);
const resultadoSuma2= suma(6,2);
const resultadoSuma3= suma(7,2);

console.log('resultado: ', resultadoSuma1);
console.log('resultado: ', resultadoSuma2);
console.log('resultado: ', resultadoSuma3);

//callback: funcion que se ejecuta al final de una funcion

function sumar (a,b,cb) {
    const r = a + b
    cb(r)
}

function callback(result){
    console.log('Aqui está el callback y te dio como resultado: ',result)
}

sumar(2,3,callback)

//fat arrow function: no requieren de declararse como function

const miFatArrowFunction= (a,b) => a+b;
const otraFAF =(a,b)=>{
    return a+b;
}
const r = otraFAF(12,21)
console.log(r)

//funciones anonimas: funcion que no tiene nombre

sumar(2,3, function(r){
    console.log(`soy una funcion anonima y mi resultado es ${r}`)
})