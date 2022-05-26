///operadores con ejemplos
const suma= 1+2;
const resta=5-2;
const multipicacion=5*5;
const division=16/4;
const modulo=15%2;

console.log(`1+2=${suma}`)
console.log(`5-2=${resta}`)
console.log(`5*5=${multipicacion}`)
console.log(`16/4=${division}`)
console.log(`15%2=${modulo}`)

//incremento
let num =5
num++;
num++;
num++;

console.log(num)

//decremento
num=5
num--
num--
num--

console.log(num,"\n")

//operacion de asignacion en incremento
num =5
num += 19

console.log(num)

//operacion de asignacion en decremento
num=5 
num-=4
console.log(num)

//operacion de asignacion en multiplicacion

num=5
num*=9
console.log(num)

//operacion de asignacion en division

num=5
num/=2
console.log(num,"\n")

///////////////////////OPERADORES DE COMPARACION/////////////////

const resultado1= 5===6 //Estrictamente igual
const resultado2= 5=='5'//Iguales

const resultado3= 5<6//menor que
const resultado4=5<5
const resultado5=5>6//mayor que
const resultado6=5>4

const resultado7=5<=5//menor igual que
const resultado8=5>=6//mayor igual que

const resultado9=5!=='4'//estrictamente desiguales
const resultado10=5!='5'//desiguales

console.log(resultado1,"\n",resultado2,"\n",resultado3,"\n",resultado4,"\n",resultado5,"\n",resultado6)
console.log(resultado7,"\n",resultado8)
console.log(resultado9,"\n",resultado10)

///////////////////////OPERADORES LOGICOS/////////////////
//or ||
//and &&
//not !

const resultadoOr=false||true// si hay un true, no habrá falase
const resultadoAnd=true && false //si hay un false, el resultado sera false
const resultadoNot=!true
console.log(resultadoOr)
console.log(resultadoAnd)
console.log(resultadoNot)
