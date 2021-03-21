// Assignment Code
var generateBtn = document.querySelector("#generate");


// When button is clicked a prompt comes up 
generateBtn.addEventListener("click", writePassword); 


// Write password to the #password input
function writePassword() {

  var pass =  questions();
  console.log(pass)
  var passwordText = document.querySelector("#password"); 
  passwordText.value = pass

}


/*this is the function questions that asks the questions and holds the array for the password created by the user input. It will be passed through the writePassword function. */
function questions() {
  var typeArr = []; //this holds the prompt array 
  var result = []; //this holds 

  // These are the questions for the user prompts 
  var passwordLength = prompt(`Please choose a password length between 8 and 128. `);
  //this is how the page resets is some enters an invalid number in the prompt
  if ( passwordLength < 8 || passwordLength > 128) {
    confirm ("INVALID NUMBER : Password length needs to be a number between 8 and 128 ."); 
    location.reload() ;
   return ;
  }
  var uppercaseQuestion = confirm (`Would you like to include UpperCase Letters?`); 
  var lowercaseQuestion = confirm (`Would you like to include LowerCase Letters? `); 
  var numberQuestion = confirm (`Would you like to include Numbers? `); 
  var symbolQuestion = confirm (`Would you like to include Symbols ? `); 
  
  //this is the conditions that are passed after the user submits inputs via prompts.  
  if ( uppercaseQuestion === true) {
   
    typeArr = typeArr.concat(upperCase);
  }

  
   if (lowercaseQuestion === true ){
   
      typeArr = typeArr.concat(lowerCase);
   }
   
   if (numberQuestion === true){
     typeArr = typeArr.concat(number);
    }
   
   if (symbolQuestion === true){

    typeArr = typeArr.concat(symbol);
   }

  /* this lets the user pick how long the password is and also randomizes the array that is created based on prompts */  
  for (let i = 0; i < passwordLength; i++) {
  var randomNum = Math.floor(Math.random() * typeArr.length)
 
// This pushes the results of the random array back into the typeArr but random
  result.push(typeArr[randomNum])
}
// This is where the arrays are turned to strings in order to be together and not separated.  
  return result.join('');
 
}; 

// This is the arrays 
let upperCase=['A', 'B', 'C' , 'D' , 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 

let lowerCase= [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

let number= ['1','2','3','4','5','6','7','8','9','0']; 

let symbol= [ '!', '@', '#', '$', '%', '&', '*', '-', '_']; 






