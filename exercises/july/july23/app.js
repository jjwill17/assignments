//An example of a solution
function noDupes(str){
    let noDupes = "";
    let extras = "";

    for (var i = 0; i < str.length; i++){
    (noDupes.includes(str[i])) 
    ? extras = extras.concat(str[i]) 
    : noDupes = noDupes.concat(str[i]);
    }
    return noDupes + "/n" + extras;
}

console.log(noDupes("bookkeeper larry"))


//Another solution

function noDuplicates(str){
    // declare an empty string to build
    var noDupes = "";
    // Loop through the string to check each letter
    for (var i = 0; i < str.length; i++) {
      // If the noDupes string doesn't have the current letter
      if(noDupes.indexOf(str[i]) === -1){
        // add it to the noDupes string
        noDupes += str[i]
      }
    }
    return noDupes;
  }
  
  console.log(noDuplicates("bookkeeper larry")) // "bokepr lay"