// Given a query object and an array of objects, write a function 
// that returns an array of items that match the query.

    // If the query object is empty, return the entire array.
    // If the array contains no matches, return an empty array

    const database = [
        {firstName: "Jack", lastName: "Smith", age: 2},
        {firstName: "Jill", lastName: "Johnson", age: 20},
        {firstName: "Jill", lastName: "Smith", age: 100},
        {firstName: "Jack", lastName: "White", age: 2}
     ]
     
     const filterDatabase = (obj, database) => {
      return database.filter(index => {
        if(index.firstName === obj.firstName || index.lastName === obj.lastName || index.age === obj.age){
          return index
        } else if (Object.keys(obj).length === 0){
          return database
        }
      })
     }
     
     console.log(filterDatabase({}, database))
     console.log(filterDatabase({dolphin: "squeak!"}, database))
     console.log(filterDatabase({firstName: "Jack", age: 2}, database))