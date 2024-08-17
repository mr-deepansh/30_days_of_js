/* Class Definition :Task 1: Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("John", 30);
console.log(person1.greeting());

/* Class Definition: Task 2: Add a method to the Person class that updates the age property and logs the updated age */
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }
}
const person2 = new Person2("John", 30);
person2.updateAge(31);

/* Class Inheritance: Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID */

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }
}
const student1 = new Student("John", 30, 12345);
console.log(student1.getStudentId());

/* Class Inheritance:Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message */
class Student2 extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}.`;
  }
}
const student2 = new Student2("John", 30, 12345);
console.log(student2.greeting());

/* Static Methods and Properties:Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message */
class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static genericGreeting() {
    return "Hello, this is a generic greeting message.";
  }
}
console.log(Person3.genericGreeting());

/* Static Methods and Properties : Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students */
class Student3 extends Person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student3.studentCount++;
  }
}
const student3 = new Student3("John", 30, 12345);
const student4 = new Student3("Jane", 25, 12346);
const student5 = new Student3("Bob", 35, 12347);
const student6 = new Student3("Alice", 28, 12348);
console.log(Student3.studentCount);

/* Getters and Setters :Task 7: Add a getter method to the Person class to return the full name (assume a FirstName and lastName property). Create an instance and log the full name using the getter */
class Person4 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person3 = new Person4("John", "Doe", 30);
console.log(person3.fullName); // Output: John Doe

// /* Getters and Setters:Task 8: Add a setter method to the Person class to update the name properties
//  ( FirstName and lastName ). Update the name using the setter and log the updated full name */
class Person5 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newName) {
    const [firstName, lastName] = newName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person4 = new Person5("John", "Doe", 30);
console.log(person4.fullName); // Output: John Doe

person4.fullName = "Jane Smith";
console.log(person4.fullName); // Output: Jane Smith

/* Private Fields (Optional): Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods. */
class Account {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
  }
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Insufficient balance");
    }
  }
  get Balance() {
    return this.#balance;
  }
}

const account1 = new Account(1000);
account1.deposit(500); // Deposited 500. New balance: 1500
account1.withdraw(200); // Withdrawn 200. New balance: 1300
console.log(`Your Balance is ${account1.Balance}`); // Output: 1300
