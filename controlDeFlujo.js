//control de flujo
//if
const edad=5
if (edad >5  && edad <18) {
        console.log('El niño puede jugar ;)') 
}else{
    console.log('El niño no puede jugar :(')
}

//while
let x=0
while (x<=5) {
    console.log(x);
    x++
}
console.log('se acabo el loop')

//switch
switch ('lel'){
    case 1:{
        console.log('Soy el caso 1');
        break;
    }

    case 2:{
        console.log('Soy el caso 2');
        break;
    }

    case 3:{
        console.log('cometo terrorismo y crimenes de odio');
        break;
    }

    default:
        console.log('No seas wey');
        break;
}

//for


function iterar(arg1){

    // for (let i = 0;i < 10; i++ ) {
    //     console.log(i);
    // }
    
    // //accediendo a los indices del arreglo
    // const arreglo=[1,2,3,4,5,'se acabo'];
    
    // for (let i = 0;i < arreglo.length; i++ ) {
    //     console.log(arreglo[i]);
    // }
    
    for(let i = 0; i < arg1.length; i++){
        console.log(arg1[i]);
    }
}
const numeros = [1,2,'hola',4,5];
const nombres = ['Ernesto', 'Edu','Tristan','Oscar','Luis'];

iterar(numeros)
iterar(nombres)

