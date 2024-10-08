/* Class Definition :Task 1: Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("John", 30);
console.log(person1.getGreeting());

/* Class Definition: Task 2: Add a method to the Person class that updates the age property and logs the updated age */
class PersonWithAgeUpdate {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }
}

const person2 = new PersonWithAgeUpdate("John", 30);
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
class StudentWithGreeting extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getGreeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

const student2 = new StudentWithGreeting("John", 30, 12345);
console.log(student2.getGreeting());

/* Static Methods and Properties:Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message */
class PersonWithStaticGreeting {
  static genericGreeting() {
    return "Hello, this is a generic greeting message.";
  }
}

console.log(PersonWithStaticGreeting.genericGreeting());

/* Static Methods and Properties : Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students */
class StudentWithCount extends Person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    StudentWithCount.studentCount++;
  }
}

const student3 = new StudentWithCount("John", 30, 12345);
const student4 = new StudentWithCount("Jane", 25, 12346);
const student5 = new StudentWithCount("Bob", 35, 12347);
const student6 = new StudentWithCount("Alice", 28, 12348);
console.log(StudentWithCount.studentCount);

/* Getters and Setters :Task 7: Add a getter method to the Person class to return the full name (assume a FirstName and lastName property). Create an instance and log the full name using the getter */
class PersonWithFullName {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person3 = new PersonWithFullName("John", "Doe", 30);
console.log(person3.fullName);

/* Getters and Setters:Task 8: Add a setter method to the Person class to update the name properties
  ( FirstName and lastName ). Update the name using the setter and log the updated full name */
class PersonWithSetFullName {
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

const person4 = new PersonWithSetFullName("John", "Doe", 30);
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
  get balance() {
    return this.#balance;
  }
}

const account1 = new Account(1000);
account1.deposit(500); // Deposited 500. New balance: 1500
account1.withdraw(200); // Withdrawn 200. New balance: 1300
console.log(`Your balance is ${account1.balance}`); // Output: 1300
