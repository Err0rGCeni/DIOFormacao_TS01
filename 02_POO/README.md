# Programação Orientada a Objetos com TypeScript

> A programação orientada a objetos (POO) é um paradigma de programação que se baseia em conceitos como objetos, classes, herança e encapsulamento. Tanto JavaScript quanto TypeScript suportam programação orientada a objetos, embora TypeScript tenha recursos adicionais que facilitam a aplicação desse paradigma.

Um **objeto** é uma instância de uma classe e representa uma entidade com propriedades e comportamentos. Em JavaScript e TypeScript, você pode criar objetos de forma literal ou usando construtores de classes.

Em TypeScript, você pode definir a estrutura de um objeto usando interfaces e/ou classes.

## Classe e Herança

**Classes** são a base da programação orientada a objetos. Elas definem a estrutura e o comportamento dos objetos.

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}
```

**Herança** permite que uma classe herde propriedades e métodos de outra classe. Em JavaScript e TypeScript, você também pode usar o mecanismo de protótipo para alcançar a herança.

```javascript
function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
  console.log(this.name + " is studying");
};
```

```typescript
class Student extends Person {
  grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(this.name + " is studying");
  }
}
```

## Encapsulamento

Encapsulamento é o princípio de ocultar detalhes internos de um objeto e fornecer uma interface para interagir com ele. Em JavaScript, a convenção é usar convenções de nomenclatura para indicar a visibilidade dos membros (por exemplo, `_name` para indicar um membro privado). Em TypeScript, você pode usar modificadores de acesso (`public`, `private` e `protected`) para controlar a visibilidade dos membros da classe.

Em JavaScript, os setters e getters são definidos usando as palavras-chave `set` e `get`, respectivamente.

```javascript
class Person {
  constructor(name) {
    this._name = name; // Propriedade privada
  }

  // Setter
  set name(value) {
    this._name = value;
  }

  // Getter
  get name() {
    return this._name;
  }
}

let person = new Person("Alice");
console.log(person.name); // 'Alice'
person.name = "Bob";
console.log(person.name); // 'Bob'
```

Em TypeScript, podemos usar a mesma abordagem do JavaScript para definir setters e getters. No entanto, o TypeScript também fornece uma sintaxe alternativa usando a palavra-chave `set` e `get` diretamente nas propriedades da classe.

```typescript
class Person {
  private _name: string; // Propriedade privada

  // Setter
  set name(value: string) {
    this._name = value;
  }

  // Getter
  get name(): string {
    return this._name;
  }
}

let person = new Person();
person.name = "Alice";
console.log(person.name); // 'Alice'
```

Em JavaScript, a palavra reservada `readonly` não existe nativamente. No entanto, é possível simular uma propriedade somente leitura usando o `Object.defineProperty()` para definir a propriedade com a configuração writable como false. Isso impede a modificação posterior da propriedade.

```javascript
var person = {};
Object.defineProperty(person, "name", {
  value: "Alice",
  writable: false
});

console.log(person.name); // "Alice"
person.name = "Bob"; // Não tem efeito, pois a propriedade é somente leitura
console.log(person.name); // "Alice"
```

Em TypeScript, a palavra reservada `readonly` é suportada diretamente como um modificador de propriedade. Ao usar `readonly`, é possível declarar propriedades que não podem ser modificadas após a sua inicialização.

```typescript
class Person {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let person = new Person("Alice");
console.log(person.name); // "Alice"
person.name = "Bob"; // Erro: Cannot assign to 'name' because it is a read-only property
console.log(person.name); // "Alice"
```

O uso de `readonly` em TypeScript é uma forma conveniente de declarar propriedades que devem permanecer constantes após a inicialização. Isso ajuda a garantir a imutabilidade dos dados e fornece uma camada de proteção adicional contra alterações indesejadas nas propriedades.
