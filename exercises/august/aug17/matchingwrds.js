// Pull out repeat words in a string:
// Create a function that accepts the pirate's inscription.
// Create an array to store all repeated words.
// Only list the repeated words once in the new array.
// Return the new array.

// One way of solving this problem:
const noRepeatWds = (string)=>{
    let pirateArr = string.split(" ");
    let newArr = []
    let doubleWord = [];
    pirateArr.forEach(function(indexV){
        if(newArr.includes(indexV) !== true){
            newArr.push(indexV);
        } else {
            if(doubleWord.includes(indexV) === false){
                doubleWord.push(indexV);
                
            }else{
                console.log(`alread in the array`)
            }
            // return doubleWord;
        }
        // return doubleWord
    })
    return doubleWord
}

console.log(noRepeatWds("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."))

// Another way to solve this:
const phrase = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

const matchingWords = str => {
    const arr = str.split(" ")
    const secretPhrase = []
    for(var i = 0; i < arr.length; i++){
        let firstIndex = arr.indexOf(arr[i])
        let lastIndex = arr.lastIndexOf(arr[i])
        if(firstIndex !== lastIndex){
            secretPhrase.push(arr[i])
        }
    }
    const obj = new Set(secretPhrase)
    returnn [...obj].join()
}
console.log(matchingWords(phrase))const phrase = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

const matchingWords = str => {
    const arr = str.split(" ")
    const secretPhrase = []
    for(var i = 0; i < arr.length; i++){
        let firstIndex = arr.indexOf(arr[i])
        let lastIndex = arr.lastIndexOf(arr[i])
        if(firstIndex !== lastIndex){
            secretPhrase.push(arr[i])
        }
    }
    const obj = new Set(secretPhrase)
    return [...obj].join(" ")
}
console.log(matchingWords(phrase))