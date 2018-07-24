var mountainClimber = {  
    name: "Justin",
    age: 29,
    favoriteClimbs: [
      {
        climbName: "Tetons",
        difficulty: 7,
      },
      {
        climbName: "Mount Everest",
        difficulty: 10
      },
      {
        climbName: "Mt. Rainier",
        difficulty: 8
      }
    ],
    mountainClimbingFriends: [
      {
        name: "Livia",
        age: 30,
        favoriteClimbs: [ 
          {
            climbName: "Mount Everest",
            difficulty: 10
          },
          {
            climbName: "Olympus Mons",
            difficulty: 30
          },
          {
            climbName: "Mauna Kea",
            difficulty: 5
          }
        ]
      },
      {
        name: "Jon",
        age: 27,
        favoriteClimbs: [
          {
            climbName: "Spirit Mountain",
            difficulty: 5
          },
          {
            climbName: "PooPoo Mtn.",
            difficulty: 2
          }
        ]

      }
    ],
    print: function(){
      console.log("These are my climbing friends: " + this.mountainClimbingFriends[0].name, "&",this.mountainClimbingFriends[1].name)
    }
}

mountainClimber.print()
console.log(mountainClimber.mountainClimbingFriends[0].age)