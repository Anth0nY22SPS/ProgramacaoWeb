let para = 10
let i = 0;
while (i <= para) {
    console.log(i);
    i+=2;    
};

//---------------------------------- 2
do {
    let a = "Digiter sua idade";
} while (a!=0);

//---------------------------------- 3

let escolhar = 7

for(i=0; i <= 10; i++){
    console.log(`${escolhar} x ${i} = ${escolhar*i}`)
}

//---------------------------------- 4


var sub = 0;
var anterio = 1;

for (i = 0; i <= 10; i++) {
    
    console.log(sub);

    let proximo = (sub+anterio);

    sub = anterio;
    anterio = proximo;
};

//----------------------------------- 5

for(i=2; i <= 20; i++) {
    var primoBool = true;
    
    for(p = 2; p < i; p++) {
        if(i % p === 0) {
            primoBool = false;
            break;
        };
    };
    
    if(primoBool) {
        console.log(`numero primo ${i}`);
    };
};
