// function imc(peso, altura) {
//     let calculo = peso/(altura * altura);   
//     return "seu imc " + calculo.toPrecision(4);
// }

// console.log(imc(90, 1.90));


// function soma(n1, n2){
//     return `${n1} + ${n2} = ${n1+n2}`;
// }
// function subtrai(n1, n2){
//     return `${n1} - ${n2} = ${n1-n2}`;
// }
// function divisao(n1, n2){
//     return `${n1} / ${n2} = ${n1/n2}`;
// }
// function multiplica(n1, n2){
//     return `${n1} x ${n2} = ${n1*n2}`;
// }

// console.log(soma(10, 5));
// console.log(subtrai(10, 5));
// console.log(divisao(10, 5));
// console.log(multiplica(10, 5));


function calculadora (sinal, n1, n2){
    switch (sinal) {
        case "+":
            return `${n1} + ${n2} = ${n1+n2}`;
            break;
        case "-":
            return `${n1} - ${n2} = ${n1-n2}`;
            break;
        case "/":
            return `${n1} / ${n2} = ${n1/n2}`;
            break;
        case "x":
            return `${n1} x ${n2} = ${n1*n2}`;
            break;
    
        default:
            console.log("Por Favor digiter uma das operaçoes soma = (+); subtração = (-); ")
            break;
    }
}