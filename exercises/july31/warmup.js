// Find the frequency of each letter in phrase
var phrase = 'slimy smelly solution'; 

function letterFreq(str){
  var frequency = {};
  for(var i = 0; i < str.length; i++){
    var letter = str.charAt(i);
    if (frequency[letter]) {
      frequency[letter]++
    } else {
      frequency[letter] = 1
    }
  } return frequency;
}

letterFreq(phrase)