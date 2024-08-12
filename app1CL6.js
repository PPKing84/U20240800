//Sin funciom
let a=1, b=4, c=5, d=6, e=3, f=5;
let suma;

suma = a+b
console.log(suma)

suma = c+d
console.log(suma)

suma = e+f
console.log(suma)

//Con funcion
sumarNumeros(a,b)
sumarNumeros(c,d)
sumarNumeros(e,f)

function sumarNumeros(numero1, numero2){
    //let sumaTotal= numero1+numero2
    //console.log(sumaTotal)
    //return sumaTotal
return console.log('esto es : '+ (parseInt(numero1)+ parseInt (numero2)))    
}
//Funcion Anónima
let sumar = function(a,b){
    return a+b
}
//Invocando la funcion
let resultado =sumar(2+2)
console.log(resultado)

//Funcion de flechada
const multiplicar=(a,b)=>{
    const resultado= a*b;
    return resultado;
}

console.log(multiplicar(100,100))