// welcome user function

function welcomeUser(){
    var name = prompt("Enter your name:");
    alert("Welcome! "+ name);
}

// Function to return the bigger number

function biggerNum(){
 var num1=parseInt(prompt("Enter first number"));
 var num2=parseInt(prompt("Enter second number"));

    if (num1>num2){
        console.log(num1+" is the bigger number");
    }
    else if(num2>num1){
        console.log(num2+" is the bigger number");
    }
    else if(num1==num2){
        console.log("The numbers are the same");
    }
    else{
        console.log("You didn't enter two numbers");
    }
}

function changeText() {
    document.getElementById("demo").innerHTML = "Text changed!"; 
}

// Function for 'encrypt message' project

function encryptMsg(){
  var plainText = prompt("Enter Your Message");
  
  for(var i=0; i<plainText.length; i=i+2){
    temp = plainText[i];
    plainText[i] = plainText[i+1];
    plainText[i+1] = temp;
    cipherText =plainText[i] + plainText[i+1];
    console.log(cipherText.toLowerCase());
  }
}

// Functions for the 'lab 3' project

function Add(){
    let firstNum = document.getElementById("fNum").value;
    let secNum = document.getElementById("sNum").value;
    let sum = parseInt(firstNum) + parseInt(secNum);
    document.getElementById("output").innerHTML = sum;
}
function Sub(){
    let firstNum = document.getElementById("fNum").value;
    let secNum = document.getElementById("sNum").value;
    let answer = parseInt(firstNum) - parseInt(secNum);
    document.getElementById("output").innerHTML = answer;
}
function Multiply(){
    let firstNum = document.getElementById("fNum").value;
    let secNum = document.getElementById("sNum").value;
    let product = parseInt(firstNum) * parseInt(secNum);
    document.getElementById("output").innerHTML = product;
}
function Divide(){
    let firstNum = document.getElementById("fNum").value;
    let secNum = document.getElementById("sNum").value;
    let ans = parseInt(firstNum) / parseInt(secNum);
    document.getElementById("output").innerHTML = ans;
}

// Function for 'form validation' project

function validate() {
    if (document.myForm.Name.value == "") {
      alert("Please provide your name!");
      document.myForm.Name.focus();
      return false;
    }
    if (document.myForm.EMail.value == "") {
      alert("Please provide your Email!");
      document.myForm.EMail.focus();
      return false;
    }
    if (
      document.myForm.Zip.value == "" /*||isNaN(document.myForm.Zip.value)||document.myForm.Zip.value.length != 5*/) {
      alert("Please provide a zip in the format #####.");
      document.myForm.Zip.focus();
      return false;
    }
    if (document.myForm.Country.value == "-1") {
      alert("Please provide your country!");
      return false;
    }
    if (document.myForm.Password.value == "") {
      alert("Please provide your password!");
      return false;
    }
    if (document.myForm.ConfirmPassword.value == "") {
      alert("Please confirm your password!");
      return false;
    }
    if (document.myForm.ConfirmPassword.value != document.myForm.Password.value) {
      alert("Your password does not match!");
      return false;
    }
    return true;
}
