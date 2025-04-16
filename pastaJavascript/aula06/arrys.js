let arraysDeNumeros = [];

for(let i=0; i != 10; i++){
    arraysDeNumeros.push(i);
}

console.log(arraysDeNumeros.length)
console.log(arraysDeNumeros)

for(let lista in arraysDeNumeros){
    console.log(lista);
}


//---------------------------------------------------------


let saborPastel = ["queijo", "carne", "frango"];

saborPastel.splice(1,1);
console.log(saborPastel);


// muito avançado
let resultado = saborPastel.filter((saborPastel) => saborPastel != "carne");
console.log(it);