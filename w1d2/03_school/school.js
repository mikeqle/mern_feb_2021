//-------------------------------------------------------------------------------------------
// this is an "abstract" class - we do NOT intend to EVER make an instance
//    of this class!
// the purpose of an abstract class is to group common attributes and methods
//    in to a parent / super class to simplify and reduce code (DRY)
//-------------------------------------------------------------------------------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(`\nMy name is: ${this.name} and I am ${this.age} years old.`);
  }
}


//-------------------------------------------------------------------------------------------
// What is unique about a student?
//    unique pieces are placed in a child class
//-------------------------------------------------------------------------------------------
// setting a default value for the parameter 'gpa'
//    the default for gpa can be overridden when the object is instantiated / constructed
//        if you do not pass an argument for the 'gpa' it will default to '4.0'
//        if you pass in a value (argument) for 'gpa' it will use what is passed in
//-------------------------------------------------------------------------------------------
class Student extends Person {
  constructor(name, age, gpa = 4.0) {
    super(name, age);
    this.gpa = gpa;
    this.numDueAssignments = 0;
  }

  // this method uses the "this" keyword to refer to the object that is invoking the function
  getSchoolLevel = function () {
    if (this.age < 11) {
      console.log("\n" + this.name + " is in elementary school.");
    }
    else if (this.age < 15) {
      console.log("\n" + this.name + " is in middle school.");
    }
    else {
      console.log("\n" + this.name + " is in high school.");
    }
  };

  turnInAssignment() {
    // do something to turn in an assignment
    this.numDueAssignments--;
    console.log(this.name + " just turned in an assignment!")
    console.log(this.name + " has " + this.numDueAssignments + " still due.")
  }
}

//-------------------------------------------------------------------------------------------
// What is unique to a teacher?  
//-------------------------------------------------------------------------------------------
class Teacher extends Person {
  constructor(name, age, subject = "all") {
    super(name, age);
    this.subject = subject;
  }

  assignHomework(student) {
    // assign some homework to the student
    student.numDueAssignments++;
    console.log(this.name + " just assigned homework to " + student.name);
  }
}


//-------------------------------------------------------------------------------------------
// Let's create some instances and try this out!
//-------------------------------------------------------------------------------------------

const student1 = new Student("Billy", 16, 3.7);
const student2 = new Student("Sally", 15);

const teacher1 = new Teacher("Mr. Homework", 45, "Math");

teacher1.assignHomework(student1);
teacher1.assignHomework(student2);
teacher1.assignHomework(student2);
teacher1.assignHomework(student2);
teacher1.assignHomework(student2);

student2.turnInAssignment();
console.log(student2);

student2.print();

