const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const cpasswordInput = document.getElementById('cpassword');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const passwordError = document.getElementById('password-error'); 
const cpasswordError = document.getElementById('cpassword-error'); 
let a="@gmail.com"
var b=emailInput.value.slice(-10)

form.addEventListener('submit', function(event) {
    let a="@gmail.com"
    var b=emailInput.value.slice(-10)
    let isValid = true;
   
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is  required';
        isValid = false;
    
    }
    else if(b!=a){
        emailError.textContent = 'you must enter a valid email';
        isValid = false;
    }
     else {
        emailError.textContent = '';
    }
    
    if (phoneInput.value.trim() === '') {
        phoneError.textContent = 'Phone number is required';
        isValid = false;
    }
    else if(phoneInput.value.trim().length!=10){
        phoneError.textContent = 'you must enter 10 digit number';
        isValid = false;
    }
     else {
        phoneError.textContent = '';
    }

    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if(passwordInput.value.trim().length<8){
        passwordError.textContent = 'Password atleast 8 character is required';
        isValid = false;
    }    
    else {
        passwordError.textContent = '';
    }
    if (cpasswordInput.value === '') {
        cpasswordError.textContent = 'Confirm Password is required';
        isValid = false;
    } 
    else if (cpasswordInput.value !=passwordInput.value ) {
        cpasswordError.textContent = "Confirm Password is doesn't match with password";
        isValid = false;
    } else {
        cpasswordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
    if(isValid){
        alert("You entered the valid Informations,validation successfully finished")
    }
    
});