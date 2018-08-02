var employees = []
function Employee(name, job, salary, status){
  this.name = name;
  this.job = job;
  this.salary = salary;
  this.status = status;
  this.display = function(printEmployeeForm){
    console.log(`Name: ${this.name}, Job Title: ${this.job}, Salary: ${this.salary}, Status: ${this.status}`)
  }
}

var john = new Employee("John", "Chef", "$2 per hour", "Full time")
john.display()

var jacob = new Employee("Jacob", "Singer", "$4 per month", "Full time")
jacob.display()

var jingleheimerschmitt = new Employee("Jingleheimerschmitt", "Janitor", "$5000 per hour", "Part time")
jingleheimerschmitt.display()