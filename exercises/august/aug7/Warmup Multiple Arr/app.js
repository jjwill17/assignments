
var people = [  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 29
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    },{
      firstName: "Pasha",
      lastName: "Datsyuk",
      age: 13
    },{
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
    }
  ]

function olderThan18(arr){
    return arr.map(function(person){
        if(person.age > 18){
            return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
        }
    })
}

var olderThan18Array = olderThan18(people)

var over18 = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    },
  ]


// Ends with y or a:
// function olderThan18(arr){
//     return arr.endsWith(function(name){
        
//     })

//     }
// }



// Always goes at the bottom of the js doc
module.exports = {
    people: people,
    olderThan18: olderThan18,
    over18: over18
}
