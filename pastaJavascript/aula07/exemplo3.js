let notasAluno = [7, 10, 8, 9];

let calculoMedia = (notasAluno[0] + notasAluno[1] + notasAluno[2] + notasAluno[3])/notasAluno.length
let nomeAluno = "anthony";


if(calculoMedia >= 7) {
    console.log(`Ola, ${nomeAluno} sua meidia foi de ${calculoMedia} \nParabêns Vc foi aprovado`);

} else if(calculoMedia < 7) {
    console.log(`Ola, ${nomeAluno} sua meidia foi de ${calculoMedia} \nVc infelismente foi reprovado`);

} else {
    console.log("Erro: Coloque somente numeros dentro do arrays");
}