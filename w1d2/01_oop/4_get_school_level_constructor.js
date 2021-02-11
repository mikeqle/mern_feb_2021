// constructor function - using the constructor function returns a new object automatically
//    every object has a constructor function even if you don't realize it 
class Student {
  constructor(name, age) {
    if (Number(age) === NaN) {
      console.log("age passed in is not a number");
      return null;
    }

    this.name = name;
    this.age = Number(age);
  }

  // this method (function) is "shared" among all instances
  //    it uses the "this" keyword to refer to the object that is invoking the function
  // ** Notes:
  //      no function keyword is required
  //      methods must be called from an instance of a class - you cannot call this directly
  getSchoolLevel() {
    if (this.age < 11) {
      console.log(this.name + " is in elementary school.");
    }
    else if (this.age < 16) {
      console.log(this.name + " is in middle school.");
    }
    else {
      console.log(this.name + " is in high school.");
    }
  };
}

const student1 = new Student("Billy", 8);
const student2 = new Student("Sally", 16);

student1.getSchoolLevel();   
student2.getSchoolLevel();   

console.log("\nWhat is in the object?")
console.log(student1);

const student3 = new Student("Becky", 12);
