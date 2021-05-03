
// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.


function titleCase(str) {
  let newStr=[]
  for (let i=0; i<str.length;i++){
    if(i ==0 || str[i-1]==' '){
      newStr.push(str[i].toUpperCase())
    }else{
      newStr.push(str[i].toLowerCase());
    }
  }
  newStr = newStr.join('');
    
  return newStr;
}

titleCase("I'm a little tea pot");