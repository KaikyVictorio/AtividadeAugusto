var _a;
//Questão 5
var nome = prompt("digite seu nome");
alert(nome);
//Questão 06
var idade = Number(prompt("Qual sua idade?"));
//Questão 07
var numero = prompt("Diga um número ");
//let numerofloat = parseFloat(numero)
//Questão 08
var numero1 = Number(prompt("Fale um número ai"));
var numero2 = Number(prompt("Diga outro número ai"));
numero1 = Number(numero1);
numero2 = Number(numero2);
var soma = numero1 + numero2;
alert("Tu sabia que a soma desses números é: " + soma);
//Questão 09
var decimal = Number(prompt("Digite um número decimal"));
var quadrado = Math.pow(decimal, 2);
alert("O quadrado deste número é" + quadrado);
//Questão 10
var ano = Number(prompt("Qual o ano do seu nascimento? "));
var Idade = 2024 - ano;
alert("Tua idade é: " + Idade);
//Questão 11
var pnome = prompt("Qual seu primeiro nome?");
var snome = prompt("Qual seu segundo nome?");
alert("Então seu nome é " + pnome + " " + snome);
//Questão 12
var cont = prompt("Digite uma sequência de números com espaço");
var cont1 = cont === null || cont === void 0 ? void 0 : cont.split(" ");
var contsemespaco = cont1 === null || cont1 === void 0 ? void 0 : cont1.join("");
alert(contsemespaco);
//Questão 13
var animal = prompt("Fale o nome de um animal");
alert("o animal digitado foi" + animal);
//Questão 14
var Nome = prompt("Digite seu primeiro nome: ");
var Nome2 = prompt("Digite seu segundo nome: ");
alert("Acho que seu nome é " + Nome2 + " " + Nome);
//Questão 16
var numeral = Number(prompt("Diga um número ai"));
if (numeral % 2 === 0) {
    alert("ESSE NÚMERO É PAR");
}
else {
    alert("ESSE NÚMERO É IMPAR!!!!!!!!!!!!!!");
}
//Questão 17
var numeropos = Number(prompt("Fala por favor mais um número"));
if (numeropos > 0) {
    alert("POSITIVOOOO");
    if (numeropos === 0) {
        alert("rapaz, positivo ou negativo?");
    }
}
else {
    alert("NEGATIVOOOOO");
}
//Questão 18
var numeromaior = Number(prompt("Novamente, diga um número: "));
var numeromaior2 = Number(prompt("DE NOVO, fala outro número: "));
if (numeromaior > numeromaior2) {
    alert(numeromaior + "é maior que " + numeromaior2);
    if (numeromaior === numeromaior2) {
        alert("Os dois são iguais.");
    }
}
else {
    alert(numeromaior2 + "é maior que" + numeromaior);
}
//Questão 19
var altura = Number(prompt("Qual sua altura?"));
var peso = Number(prompt("E seu peso?"));
var imc = peso / (Math.pow(altura, 2));
alert("SEU IMC É " + imc.toFixed(2));
//Questão 20
var nomecont = (prompt("Esqueci teu nome, fala ai: "));
if (nomecont && nomecont.length > 5) {
    alert('SEU NOME TEM MAIS DE 5 CARACTERESSS  ');
    if (nomecont && nomecont.length === 5)
        alert("Seu nome tem 5 caracteres.");
}
else {
    alert("Seu nome tem menos de 5 caracteres.");
}
//Questão 21
var estadocivil = prompt("Qual seu estado civil?");
alert("Você é " + estadocivil + "(a)");
//Questão 22
var base = Number(prompt("Digite a base do triângulo: "));
var altura2 = Number(prompt("Qual a altura do triângulo?"));
var area = base * altura2 / 2;
alert("A área é de" + area + "cm²");
//Questão 23
var cidade = (_a = prompt("Qual a sua cidade?")) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
if (cidade && cidade[0] === "s") {
    alert("SUA CIDADE COMEÇA COM S!!");
}
else {
    alert("massa");
}
//Questão 24
var numerod = Number(prompt("Diga um número decimal"));
var numerod2 = Number(prompt("Diga outro número decimal"));
var resto = numerod % numerod2;
alert("O resto da divisão de " + numerod + "e" + numerod2 + "é" + resto);
//Questão 25
var numerodecimal = Number(prompt("Diga um número decimal"));
//let numerointeiro=parseInt(numerodecimal)
//Questão 26
var numerostr = prompt("Diga um número");
var numeroint = Number(numerostr);
var numerosoma = numeroint + 10;
var somastr = String(numerosoma);
alert("A soma do número +10 é" + somastr);
//Questão 27
var data = prompt("Fale sua data de nascimetno no formato dd/mm/aaaa");
var data2 = data === null || data === void 0 ? void 0 : data.split("/");
if (data2 && data2.length === 3) {
    var dia = data2[0];
    var mes = data2[1];
    var ano_1 = data2[2];
    alert("Você nasceu no dia " + dia + "no mês" + mes + "no dia" + ano_1);
}
//Questão 28
var Cidade = prompt("Qual a sua cidade?");
var Estado = prompt("E seu estado, qual é?");
alert("Você mora em " + Cidade + ", " + Estado);
//Questão 29
var nasc = prompt("Qual o seu ano de nascimento?");
alert("Bem vindo ao nosso programa, nascido em " + nasc);
//Questão 30
var Numero = Number(prompt("Diga um número ai"));
var string = prompt("Fale uma frase ai");
alert(Numero + " " + string);
//Questão 31
var produto = prompt("Qual o produto que você quer?");
alert(produto + "R$ 4,99");
//Questão 32
var number = Number(prompt("Diga o númeral ai"));
alert("O quadrado desse número é " + Math.pow(number, 2));
//Questão 33
var email = prompt("Qual o seu email?");
console.log(email + ", Obrigado por nos informar");
//Questão 34
var num = Number(prompt("Diga um número ai"));
var num2 = Number(prompt("Diga outro número ai"));
num = Number(num);
num2 = Number(num2);
var dif = num - num2;
alert("Soma: " + num + num2 + "\n Quociente: " + num / num2 + "\n Diferença: " + dif);
//Questão 35
var bas = Number(prompt("Qual a base do triângulo?"));
var alt = Number(prompt("Qual a altura do triangulo?"));
var areat = bas * alt / 2;
alert("A área é de " + areat);
//Questão 36
var raio = Number(prompt("Qual o raio da circuferência?"));
var perimetro = 2 * 3.14 * raio;
alert("O perímetro é " + perimetro);
//Questão 37
var baser = Number(prompt("Qual a base do retângulo?"));
var altr = Number(prompt("Qual a altura do retângulo?"));
var arear = 2 * (baser + altr);
alert("O perímetro é " + arear);
//Questão 38
var decimal1 = Number(prompt("Diga um número decimal"));
var decimal2 = Number(prompt("Diga um segundo numero decimal"));
var decimal3 = Number(prompt("Diga um terceiro numero decimal"));
var media = (decimal1 + decimal2 + decimal3) / 3;
alert("A média é " + media);
//Questão 39
var idade1 = Number(prompt("Qual sua idade?"));
alert("Você já viveu " + idade1 * 365 + " dias e " + idade1 * 365 / 12 + " meses.");
//Questão 40
var real = Number(prompt("Quantos reais você tem? "));
var dolar = Number(prompt("Quantos doláres você tem?"));
alert("Na conversão, você tem" + real / dolar + " doláres");
//Questão 41
var numerodecimal1 = Number(prompt("Diga um número decimal"));
numerodecimal1 = Math.round(numerodecimal1);
alert("Arredondando para o valor mais próximo, é " + numerodecimal1);
//Questão 42
var n1 = Number(prompt("Diga um número"));
var n2 = Number(prompt("Diga outro numero"));
var n3 = Number(prompt("Diga o ultimo número"));
alert("(n1+n2)*n3 é igual a " + (n1 + n2) * n3);
//Questão 43
var temp = Number(prompt("Qual a temperatura em Celsius?"));
var fah = (temp * 9 / 5) + 32;
alert("A temperatura em Fahrenheit é de F°" + fah);
