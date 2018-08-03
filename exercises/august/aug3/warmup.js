// Using objects, create a dictionary that allows a user
// to save words with their definitions and be able to 
// look them up again

var dictionary = {
    //This is where the word & definition 
    //will be stored
  }
  
  function addWord(word, definition){
    // user puts in a word
    if(!dictionary[word]){
      dictionary[word] = definition;
      // function will store the word according
      // to the parameters
    } else {
      console.log("Need a new word")   //Error message
    }
  }
  
  function lookItUp(key){
    //code to retrieve word: definition from 
    //dictionary
    return (key + ":" + dictionary[key])
  }
  
  addWord("Hello", " a greeting")
  console.log(dictionary)
  addWord("Hello", " a greeting") //This will print the error message
  console.log(dictionary)
  addWord("Goodbye", " a farewell")
  console.log(dictionary)