// Given a string including parentheses, write a function that returns true if 
// every opening parenthesis has a closing parenthesis.
// My work in progress:
function isParenthesis(str){
    let newArr = []
    let arr = str.split("")
    arr.forEach(function(index){
      if(index !== index + 1){
        return newArr.push(index)
      }
    })
    if(newArr.length === 1){
      return true
    } else if (newArr.length > 1){
      return false
    }
  }
  console.log(isParenthesis(')((()'))

  // A solution:
  const balanceParentheses = str => {
      let leftCount = 0
      let rightCount = 0
      for(let i = 0; i < str.length; i++){
          if(str[i] === "("){
              leftCount++
          } else if (str[i] === ")"){
              rightCount++
          }
          if(rightCount > leftCount){
              return false
          }
      }
      return leftCount === rightCount
  }

  console.log(balanceParentheses("()()"))   // -> true
  console.log(balanceParentheses("(())"))   // -> true
  console.log(balanceParentheses("()))"))   // -> false
  console.log(balanceParentheses(")()("))   // -> false

 