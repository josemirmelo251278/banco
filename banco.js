class Banco{
    constructor (nome, conta){
    this.nome = nome;
    this.conta = conta;
    }



setarconta(novaconta){
    if(typeof novaconta =='stringer'){
        this.conta = novaconta
    }
    }

}

let c1 = new Banco("josemir", "poupança");
let c2 = new Banco("rafael","digital");
let c3 = new Banco("silmara","corrente");
let c4 = new Banco("murilo", "poupança");

console.log(`${c1.nome} possui a conta  ${c1.conta}`);
console.log(`${c2.nome} possui a conta ${c2.conta}`);
console.log(`${c3.nome} possui a conta ${c3.conta}`);
console.log(`${c4.nome} possui a conta ${c4.conta}`);

c2.setarconta("poupança");
console.log(`${c2.nome} alterou a conta para  ${c2.conta}`)