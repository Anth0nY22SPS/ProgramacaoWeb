let pequeno = document.getElementById("Pequno");
let medio = document.getElementById("Medio");
let grande = document.getElementById("Grande");

function pedidoPequeno(){
    alert("Seu pedido vai demora 5minutos");
}
function pedidoMedio(){
    alert("Seu pedido vai demora 5minutos");
}
function pedidoGrande(){
    alert("Seu pedido vai demora 5minutos");
}

pequeno.addEventListener("click", pedidoPequeno)
medio.addEventListener("click", pedidoMedio)
grande.addEventListener("click", pedidoGrande)