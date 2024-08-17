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
