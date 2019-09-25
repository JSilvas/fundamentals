// Traditional Constructor
// ======================= 
function Doggo(name, sound) {
  this.name = name;
  this.sound = sound;
  this.speak = () => console.log(`${this.name} loves to ${this.sound}!`);
}

let g = new Doggo('Gerald', 'bork');

g.speak()


// Class Declarations & Sub-classing
// =================================
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  sound() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

// These are create object Instances from the class Animal
// They inherit it's prototypal props & methods like constructor functions
let a = new Animal('THE DOG');
let d = new Dog('MITZIE');

// TODO: DEBUG THESE CLASS INSTANCES!
a.sound();
d.speak();


// Another Class Example
// =====================
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

let ivana = new Person(
  'Ivana', 
  'Berger', 
  36, 
  'female', 
  ['Mainframe Hacking', 'Scotch']
  );

ivana.greeting();