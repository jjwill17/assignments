// Warm up:
// Create an array of everyone that has at least one dog and sort them by age.
// Create an array of pets' first names.
// Display the pets' names in <li>s.
// Only display names of pets if their owners are older than 20.
// Only display pets who have nicknames.

const peopleAndPets = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];

// Array of everyone with at least one dog
const peopleWithDogs = peopleAndPets.filter(person => {
  const dogsOnly = person.pets.filter(pet => {
    return pet.type === "dog"
  })
  return dogsOnly.length > 0
})

// Sorted array by age
const sorted = peopleWithDogs.sort((a, b) => a.age > b.age)


// Array of pet's first names
const firstNames = peopleAndPets.reduce((agg, value) => {
    const names = value.pets.reduce((agg, value) => {
        return [...agg, value.name]
    }, [])
    return [...agg, names]
}, [])

// Display pet's names in <li>s
const putNamesInLI = firstNames.map(name => `<li>${name}</li>`)


// Only display names of pets if their owners are older than 20
const onlyOwnersOver20 = peopleAndPets.filter(person => { return person.age > 20})

const petNames = onlyOwnersOver20.reduce((agg, value) => {
    const names = value.pets.reduce((agg, value) =>{
        return [...agg, value.name]
    }, [])
    return [...agg, names]
}, [])

// Only display pets who have nicknames
const onlyHasNicknames = peopleAndPets.filter(function(person){
    const hasNickName = person.pets.filter(pet => {
        if (pet.nickNames.length > 0)
        return true
      })
      return hasNickName.length > 0
})
const petsWithNNames = onlyHasNicknames.reduce((agg, value) => {
    const names = value.pets.reduce((agg, value) =>{
        return [...agg, value.name]
    }, [])
    return [...agg, names]
}, [])

