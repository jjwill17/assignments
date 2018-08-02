// Return number of times the string "code" appears
// except for letter "d" we will take any letter

// One solution using regex
function countCode(str){
    return str.match(/co.e/gi).length   // The period in co.e is an expression letting us grab
}                                       // a word "co_e" where the period can be any letter

countCode("aaacodebbb")

// Another solution
function countCode(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if (str[i] + str[i + 1] + str [i + 3] === 'coe'){
            count++
        }
    } return count;
}

console.log(codeCount("aaacodebbb"))
console.log(codeCount("codexxcode"))
console.log(codeCount("cozexxcope"))