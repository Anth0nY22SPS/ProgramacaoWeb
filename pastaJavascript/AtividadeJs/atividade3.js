let nota = 90;


if(nota >= 90){
    console.log(`Vc tiro ${nota} = A`);

}else if( nota < 90 && nota >= 80){
    console.log(`Vc tiro ${nota} = B`);

} else if(nota < 80 && nota >= 70){
    console.log(`Vc tiro ${nota} = C`);
        
} else if(nota < 70 && nota >= 60){
    console.log(`Vc tiro ${nota} = D`);
    
} else if (nota < 60){
        console.log(`Vc tiro ${nota} = F`);

} else {    
    console.log("Erro: Só e permitido numeros")
}
