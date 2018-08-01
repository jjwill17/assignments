var elephants = {
    name: "elephant",
    legs: 4,
    weight: "really big",
    nose: "long",
    sound: "phhhhhzhzhzzzz",
    address: {
        street: "123 street",
        city: "SLC",
        state: "UT",
        zip: "12345-6789",
    },
    speak: function() {
      console.log(this.sound)
    }
}

elephants.speak()

//Array Objects

var course = [ 
    {
    firstName: "Jim",
    lastName: "Johnson",
    age: 28,
    email: "blah"
    },
    {
    firstName: "Lisa",
    lastName: "Johnson",
    age: 23,
    email: "blah1"
    },
    {
    firstName: "Frank",
    lastName: "John",
    age: 26,
    email: "blah2"
    }
  ]

  //Will output the age of index 0 and the email of index 2
  console.log(course[0].age, course[2].email)


//Method

var person = {
    name: "Rick",
    occupation: "mad scientist",
    catchPhrase: "Lubba dubba",
    print: function() {
      console.log(this.catchPhrase);  //"this" is in place of "person", that way you can rename "var person"
    }
  }
  
  person.print()

  //Different example of the same thing as above
  var person = {
    name: "Rick",
    occupation: "mad scientist",
    catchPhrase: "Lubba dubba",
    print: function() {
      console.log(this.name + "'s catchphrase is " + this.catchPhrase + "!");  //this is in place of "person", that way you can rename "var person"
    }
  }
  
  person.print()

  //Another example

  var person = {
    name: "Rick",
    occupation: "mad scientist",
    catchPhrase: "Lubba dubba",
    age: 70,
    getOlder: function() {          //This is an example of a method/function
      this.age++  //This will increment his age by one
      console.log(this.name + " is now " + this.age)
    },
    print: function() {
      console.log(this.name + "'s catchphrase is " + this.catchPhrase + "!" + " And his age is " + this.age + ".");
    }
  }
  
  console.log(person.age)
  person.getOlder()
  person.print()

// Constructor function
//Capitalize the first letter of Person, lets JS know it is a constructor function. "this" refs "Person"
function Person(name, age, gender){   
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  var rick = new Person("Rick", 70, "male")
  var sally = new Person("Sally", 39, "female")
  
  console.log(rick)
  console.log(sally)  //or can be written console.log(rick, sally) to display in one line


  //Another example
  function Person(name, age, gender){   
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  var users = []
  
  users.push(new Person("Rick", 70, "male"))
  users.push(new Person("Sally", 39, "female"))
  
  console.log(users[0].name, "&", users[1].name)  
  //or can be written console.log(rick, sally) to display in one line

  //Another example of a method inside of a function
  function Person(name, age, gender, saying){   
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.saying = saying;
    this.speak = function(){
      console.log(this.saying)
    }
  }
  
  var rick = new Person("Rick", 70, "male", "heyyy")
  var sally = new Person("Sally", 39, "female", "Hey ohhh")
  
  rick.speak()
  sally.speak() 