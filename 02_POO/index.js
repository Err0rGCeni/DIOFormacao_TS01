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