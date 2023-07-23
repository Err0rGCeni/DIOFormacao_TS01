// Variáveis e Tipos
var a = 1;
let b = 'Dois';
const c = 'C';

//b = 3;

let y: string = 'Oi';
let x: number = 1;
let w: boolean = true;
let z: number | boolean = 1;

z = false
// Objetos e Interfaces
interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string, //Opcional
    // Quase equivalente a profissao: string | undefined
}

const eu: Pessoa = {
    nome: 'Gnaeus',
    idade: 77,
    profissao: 'Dev'
}

const tu: Pessoa = {
    nome: 'Zé',
    idade: 33,
}

const arrayPessoa1: Pessoa[] = [eu, tu]
const arrayPessoa2: Array<Pessoa> = [eu, tu]
// Decisões e Repetições
const num: number = 15;

if (num > 15) {
    console.log("NUM maior que 15");
} else if (num === 15) {
    console.log("NUM igual a 15")
} else {
    console.log("NUM menor que 15")
}

const typeUser = {
    admin: 'Seja bem-vindo admin',
    student: 'Você é um estudante',
    viewer: 'Você pode apenas visualizar'
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')

for (let i = 0; i < 5; i++) {
    console.log(i)
}
// Arrays
const array1: Array<number> = [1, 2, 3, 4]
const array2: string[] = ['1', '2', '3', '4']