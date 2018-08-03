var dogs = [
    { name: 'Fluffy', isFluffy: true },
    { name: 'Fido', isFluffy: true },
    { name: 'Scooby', isFluffy: true },
    { name: 'Ralph', isFluffy: false },
  ]
  
  // Only return the fluffy ones:
  
  var fluffy = dogs.filter(function(name){
    if(name.isFluffy){
      return name
    }
  })
  
  console.log(fluffy)
  
  // Return just the names using .map()
  
  var dogNames = dogs.map(function(dog){
    return dog.name
  })
  
  console.log(dogNames)