let numeros: number[]=[];
//Questão 02
numeros.push(1,2,3,4)
//Questão 03
console.log(numeros[1])
//Questão 04
numeros[3]= 10;
//Questão 05
numeros.pop()
//Questão 06
console.log(numeros.length)
//Questão 07
let frutas: string[]=["maçã","banana","laranja"]
//Questão 08
console.log(frutas[0])
//Questão 09
frutas.push("uva")
//Questão 10
type Aluno={
    nome: string,
    idade: number,
}

const aluno:Aluno={
    nome:"Kaiky Victório",
    idade: 18
}

let alunos: any[]=[aluno]
//Questão 11
console.log(alunos[0].nome)
//Questão 12
alunos.push(
        {nome:"Elba Ramanho", idade: 21},
        {nome:"Roberto Carlos", idade:150},
        {nome:"Reginaldo Rossi", idade: 64}
)
//Questão 13
let produtos: string[]=["banana","agua sanitaria","melao","arroz","feijao","cereal","uva","guarana","barrinha","chiclete"]
let pares = produtos.filter((Element,index)=> index%2===0)
console.log(pares)
