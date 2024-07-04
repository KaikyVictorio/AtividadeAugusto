type Pessoa= {
    nome: string
    idade: number
    endereco: string

}

const serhumano: Pessoa={
    nome: "kaiky",
    idade: 18,
    endereco: "maranguape 1"


}
//Questão 02
console.log(serhumano.nome)
//Questão 03

//Questão 04

serhumano.idade= 20
//Questão 05
type animal ={
    nome: string,
    especie: string,
    cor: string,

}

const papagaio:animal ={
    nome: "josé",
    especie:"arara azul",
    cor:"azul",

}
//Questão 06
type livro={
    titulo?: string,
    autor: string,
    ano: number,

}
const ler: livro={
    titulo:"crepusculo",
    autor:"Kaiky Victório",
    ano: 2008
}
//Questão 07
console.log(ler.autor)
//Questão 08
ler.ano= 2012
//Questão 09
delete ler.titulo;
console.log(ler)
//Questão 10
type carro={
    marca:string,
    modelo?: string,
    ano: number,

}
const honda: carro={
    marca: "honda",
    modelo: "civic",
    ano: 2009
}
console.log(honda)
//Questão 11
honda.modelo= undefined
console.log(honda)