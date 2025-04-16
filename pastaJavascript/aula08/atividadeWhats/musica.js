console.log("Ola Benvindo a escola de musica!");
let Estrumento = ["violão", "piano", "bateria"];
let escolha = "violao".toLocaleLowerCase();
console.log(`Escolha um desses estrumentos: ${Estrumento[0]}, ${Estrumento[1]}, ${Estrumento[2]}`);


aulas = {
    aulaspiano: [1],
    aulasbateria: [1, 2, 3],
    aulasviolao: [1, 2]
}


switch (escolha) {

    
    case "violao":
        console.log(`Parabens pela sua escolha, temos ${aulas.aulasviolao.length} aulas de Violão`);
        aulas.aulasviolao.pop();
        break;

    case "piano":
        console.log(`Parabens pela sua escolha, temos ${aulas.aulaspiano.length} aulas de Piano`);
        aulas.aulaspiano.pop();
        break;

    case "bateria":
        console.log(`Parabens pela sua escolha, temos ${aulas.aulasbateria.length} aulas de Bateria`);
        aulas.aulasbateria.pop();
        break;

    default:
        console.log(`Erro: Digiter as aulas`);
        break;

}