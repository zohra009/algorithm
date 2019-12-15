// const revStr = (str) => {
//   const reverse = str.split('').reverse().join('')
//   return reverse
// }
// console.log(revStr("hello"))

//pallindrome T/F
// const isPallindrome = (str) => {
//   const revStr = str.split('').reverse().join('')
//   return revStr === str 
// }

// //reverse Integer
// const reverseInteger = (int) =>{
//   const revInt = int.split("").reverse().join('')
//   return parseInt(revInt)
 
  
// }

// //capitalize 1st letter of each word 
// const capitalizeWord = (str) => {
//   const wordArr = str.split(' ')
//   const word = wordArr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
//   return word
  
// }
// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    //initialize char
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(char => {
        if(charMap[char]) {
            charMap[char]++
        }else {
            charMap[char] = 1; 
        }
        
    })
    if(charMap[char] > maxNum){
        maxChar = charMap[char]
   }
   return maxChar
    
}


maxCharacter("I love new yearssssssss")