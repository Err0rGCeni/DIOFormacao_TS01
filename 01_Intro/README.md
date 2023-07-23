# Introdução ao TypeScript

> Linguagem de programação e um superset do Javascript. Adiciona-se uma camada de tipagem ao JavaScript, permitindo um feedback mais rápido do código e refatorações mais simples.

```shell
npm init --y
npm i -D typescript
npm i -D ts-node-dev
```

- **npm init --y**: Este comando cria um arquivo package.json no diretório atual com as opções padrão. O arquivo package.json é usado para gerenciar as dependências do projeto e outras configurações do projeto.
- **npm i -D typescript**: Este comando instala o TypeScript como uma dependência de desenvolvimento no projeto. A opção -D indica que o pacote deve ser instalado como uma dependência de desenvolvimento, ou seja, é necessário apenas durante o desenvolvimento e não na produção.
- **npm i -D ts-node-dev**: Este comando instala o ts-node-dev como uma dependência de desenvolvimento no projeto. O ts-node-dev é uma ferramenta que permite executar arquivos TypeScript diretamente, sem precisar transpilá-los para JavaScript primeiro. Ele também monitora as alterações nos arquivos TypeScript e reinicia automaticamente o processo quando os arquivos são alterados.
  - Utilizado em package.json como "dev": `"ts-node-dev app.ts"`

O **npx tsc** é um comando que executa o compilador TypeScript (tsc) usando o npx. O npx é uma ferramenta que permite executar pacotes do npm sem precisar instalá-los globalmente.

## Variáveis e Tipos

Em JavaScript, pode declarar variáveis usando a palavra-chave `var`, `let` ou `const`.

```javascript
var x = 10; // Variável usando 'var'
let y = 5; // Variável usando 'let'
const z = 3; // Variável usando 'const'
```

Relembrando:

- `var`:
  - **Escopo de função**: As variáveis declaradas com var têm escopo de função, o que significa que elas são visíveis em toda a função onde foram declaradas, independentemente de blocos de código.
  - **Hoisting**: As variáveis declaradas com var sofrem hoisting, o que significa que a declaração é movida para o topo do escopo em tempo de execução. No entanto, a inicialização permanece no local original.
- `:let` (ES6):
  - **Escopo de bloco**: As variáveis declaradas com let têm escopo de bloco, o que significa que são limitadas ao bloco onde foram declaradas.
  - **Não sofre hoisting**: Ao contrário do var, as variáveis declaradas com let não sofrem hoisting. Se você tentar acessar a variável antes da sua declaração, ocorrerá um ReferenceError.
- `:const` (ES6):
  - Compartilha o mesmo **escopo de bloco** e **não-hoisting** de let.
  - **Valor imutável**: As variáveis declaradas com const são constantes, o que significa que não podem ser reatribuídas após a sua inicialização. Se aplica apenas ao valor da variável em si e não aos seus atributos ou elementos, que ainda podem ser modificados.

No TypeScript, pode adicionar tipos estáticos às variáveis. Além dos tipos primitivos como `number`, `string`, `boolean`, `null` e `undefined`, o TypeScript também permite a criação de tipos personalizados, como **classes**, **interfaces**, **enums** e **tipos de união**.

```typescript

let x: number = 10; // Variável 'x' é do tipo número
let y: number = 5; // Variável 'y' é do tipo número
let w: number || boolean = true; // Variável 'y' é do tipo número
const z: number = 3; // Variável 'z' é do tipo número
```

TypeScript oferece recursos como a **inferência de tipo**, que é a capacidade de deduzir o tipo de uma variável com base no valor atribuído a ela, e a **anotação de tipo explícita**, que é a especificação manual do tipo de uma variável.

```typescript
let message = "Hello, World!";
// TypeScript infere que a variável 'message' é do tipo 'string'
let count: number;
count = 10;
// Aqui, especificamos explicitamente que 'count' é do tipo 'number'
```

## Objetos e Interfaces

Em JavaScript, um objeto é uma coleção de pares chave-valor, onde cada chave é uma string (ou um símbolo, a partir do ES6) e cada valor pode ser qualquer tipo de dado válido em JavaScript, incluindo outros objetos, funções, arrays, entre outros.

```javascript
var person = {
  name: "John",
  age: 30,
  city: "New York"
};
```

Em TypeScript, além de usar objetos com a mesma estrutura que JavaScript, é possível aproveitar as interfaces para definir contratos para objetos. Uma **interface** é uma estrutura que define a forma que um objeto deve ter, especificando as propriedades e seus respectivos tipos.

```typescript
interface Person {
  name: string;
  age: number;
  city: string;
}

let person: Person = {
  name: "John",
  age: 30,
  city: "New York"
};
```

Uma **interface** é uma estrutura que define um contrato para objetos. Ela descreve a estrutura esperada de um objeto, especificando as propriedades e métodos que devem estar presentes no objeto. Uma interface não implementa a lógica de um objeto, apenas define sua forma.

Uma **classe**, por outro lado, é uma construção em JavaScript e TypeScript que permite criar objetos e definir sua estrutura e comportamento. Uma classe encapsula dados (propriedades) e comportamentos (métodos) relacionados em um único objeto. Ela é uma forma de criar instâncias de objetos com base em um modelo ou blueprint.

```typescript
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Woof!");
  }
}
```

## Decisões e Repetições

Em resumo, as estruturas de decisão e repetição são semelhantes em JavaScript e TypeScript, com o TypeScript fornecendo recursos adicionais de tipagem estática para tornar o código mais robusto e menos propenso a erros de tipo.

## Arrays

Em JavaScript, você pode declarar um array usando colchetes [] e separando os elementos por vírgulas.

```javascript
let numbers = [1, 2, 3, 4, 5];
```

No TypeScript, você pode declarar um array da mesma forma que em JavaScript. No entanto, você também pode adicionar tipos estáticos aos elementos do array.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ['Alice', 'Bob', 'Charlie'];
```

A notação de colchetes [] é a forma mais comum de especificar o tipo de um array no TypeScript. Você pode adicionar o tipo entre colchetes após o nome da variável.

O operador diamante <>, também conhecido como sintaxe de tipo genérico, é outra forma de especificar tipos para arrays no TypeScript. É especialmente útil quando você precisa definir arrays de tipos mais complexos ou personalizados.
