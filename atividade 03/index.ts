//Questão 5
let nome = prompt("digite seu nome")
alert(nome)
//Questão 06
let idade = Number(prompt("Qual sua idade?"))
//Questão 07
let numero = prompt("Diga um número ")
//let numerofloat = parseFloat(numero)
//Questão 08
let numero1 = Number(prompt("Fale um número ai"))
let numero2 = Number(prompt("Diga outro número ai"))
numero1= Number(numero1)
numero2= Number(numero2)
let soma = numero1+numero2
alert("Tu sabia que a soma desses números é: "+soma)
//Questão 09
let decimal= Number(prompt("Digite um número decimal"))
let quadrado= decimal**2
alert("O quadrado deste número é"+quadrado)
//Questão 10
let ano= Number(prompt("Qual o ano do seu nascimento? "));
let Idade = 2024 - ano
alert("Tua idade é: "+Idade);
//Questão 11
let pnome = prompt("Qual seu primeiro nome?")
let snome= prompt("Qual seu segundo nome?")
alert("Então seu nome é " + pnome + " "+ snome )
//Questão 12
let cont= prompt("Digite uma sequência de números com espaço")
let cont1= cont?.split(" ");
let contsemespaco = cont1?.join("")
alert(contsemespaco)
//Questão 13
let animal = prompt("Fale o nome de um animal")
alert("o animal digitado foi" + animal)
//Questão 14
let Nome= prompt("Digite seu primeiro nome: ")
let Nome2= prompt("Digite seu segundo nome: ")
alert("Acho que seu nome é " +Nome2 +" "+ Nome)
//Questão 16
let numeral = Number(prompt("Diga um número ai"))
if ( numeral%2===0){
    alert("ESSE NÚMERO É PAR")
}
else {
    alert("ESSE NÚMERO É IMPAR!!!!!!!!!!!!!!")
}
//Questão 17
let numeropos= Number(prompt("Fala por favor mais um número"))

if (numeropos>0){
    alert("POSITIVOOOO")
    if (numeropos===0){
        alert("rapaz, positivo ou negativo?")
    }
}
else{
    alert("NEGATIVOOOOO")
}
//Questão 18
let numeromaior= Number(prompt("Novamente, diga um número: "))
let numeromaior2= Number(prompt("DE NOVO, fala outro número: "))
if (numeromaior>numeromaior2){
    alert(numeromaior+"é maior que "+numeromaior2)
    if (numeromaior===numeromaior2){
        alert("Os dois são iguais.")
    }
}
else{
    alert(numeromaior2+"é maior que"+numeromaior)
}
//Questão 19
let altura= Number(prompt("Qual sua altura?"))
let peso= Number(prompt("E seu peso?"))
let imc= peso/(altura**2)
alert("SEU IMC É "+imc.toFixed(2))
//Questão 20
let nomecont = (prompt("Esqueci teu nome, fala ai: "))
if (nomecont && nomecont.length > 5) {
    alert('SEU NOME TEM MAIS DE 5 CARACTERESSS  ')
    if (nomecont && nomecont.length===5)
        alert("Seu nome tem 5 caracteres.")


}
else {
    alert("Seu nome tem menos de 5 caracteres.")
}
//Questão 21
let estadocivil= prompt("Qual seu estado civil?")
alert("Você é "+estadocivil+"(a)")
//Questão 22
let base = Number(prompt("Digite a base do triângulo: "))
let altura2 = Number(prompt("Qual a altura do triângulo?"))
let area= base*altura2/2
alert("A área é de"+area+"cm²")
//Questão 23
let cidade = prompt("Qual a sua cidade?")?.trim().toLowerCase()
if (cidade && cidade[0]==="s") {
    alert ("SUA CIDADE COMEÇA COM S!!")
    
}
else{
    alert("massa")
}
//Questão 24
let numerod= Number(prompt("Diga um número decimal"))
let numerod2= Number(prompt("Diga outro número decimal"))
let resto = numerod%numerod2
alert("O resto da divisão de "+numerod+"e"+numerod2+"é"+resto)
//Questão 25
let numerodecimal= Number(prompt("Diga um número decimal"))
//let numerointeiro=parseInt(numerodecimal)
//Questão 26
let numerostr= prompt("Diga um número")
let numeroint= Number(numerostr)
let numerosoma= numeroint+10
let somastr= String(numerosoma)
alert("A soma do número +10 é"+somastr)
//Questão 27
let data= prompt("Fale sua data de nascimetno no formato dd/mm/aaaa")
let data2= data?.split("/")
if (data2&&data2.length===3){
    let dia= data2[0];
    let mes= data2[1];
    let ano= data2[2];

    alert("Você nasceu no dia "+dia+"no mês"+mes+"no dia"+ano)
}
//Questão 28
let Cidade= prompt("Qual a sua cidade?")
let Estado=prompt("E seu estado, qual é?")
alert("Você mora em "+Cidade+", "+Estado)
//Questão 29
let nasc= prompt("Qual o seu ano de nascimento?")
alert("Bem vindo ao nosso programa, nascido em "+nasc)
//Questão 30
let Numero= Number(prompt("Diga um número ai"))
let string= prompt("Fale uma frase ai")
alert(Numero+" "+string)
//Questão 31
let produto = prompt("Qual o produto que você quer?")
alert(produto+"R$ 4,99")
//Questão 32
let number= Number(prompt("Diga o númeral ai"))
alert("O quadrado desse número é "+number**2)
//Questão 33
let email= prompt("Qual o seu email?")
console.log(email+", Obrigado por nos informar")
//Questão 34
let num= Number(prompt("Diga um número ai"))
let num2= Number(prompt("Diga outro número ai"))
num= Number(num)
num2= Number(num2)
let dif= num-num2
alert("Soma: "+num+num2+"\n Quociente: "+num/num2+"\n Diferença: "+dif)
//Questão 35
let bas= Number(prompt("Qual a base do triângulo?"))
let alt= Number(prompt("Qual a altura do triangulo?"))
let areat= bas*alt/2
alert("A área é de "+areat)
//Questão 36
let raio= Number(prompt("Qual o raio da circuferência?"))
let perimetro= 2*3.14*raio
alert("O perímetro é "+perimetro)
//Questão 37
let baser= Number(prompt("Qual a base do retângulo?"))
let altr= Number(prompt("Qual a altura do retângulo?"))
let arear= 2*(baser+altr)
alert("O perímetro é "+arear)
//Questão 38
let decimal1= Number(prompt("Diga um número decimal"));
let decimal2= Number(prompt("Diga um segundo numero decimal"));
let decimal3= Number(prompt("Diga um terceiro numero decimal"));
let media= (decimal1+decimal2+decimal3)/3
alert("A média é "+media)
//Questão 39
let idade1= Number(prompt("Qual sua idade?"))
alert("Você já viveu "+idade1*365+" dias e "+idade1*365/12+" meses.")
//Questão 40
let real = Number(prompt("Quantos reais você tem? "))
let dolar = Number(prompt("Quantos doláres você tem?"))
alert("Na conversão, você tem"+ real/dolar+" doláres")
//Questão 41
let numerodecimal1= Number(prompt("Diga um número decimal"))
numerodecimal1 = Math.round(numerodecimal1)
alert("Arredondando para o valor mais próximo, é "+numerodecimal1)
//Questão 42
let n1= Number(prompt("Diga um número"))
let n2 = Number(prompt("Diga outro numero"))
let n3= Number(prompt("Diga o ultimo número"))
alert("(n1+n2)*n3 é igual a "+ (n1+n2)*n3)
//Questão 43
let temp = Number(prompt("Qual a temperatura em Celsius?"))
let fah= (temp*9/5)+32
alert("A temperatura em Fahrenheit é de F°"+fah)


