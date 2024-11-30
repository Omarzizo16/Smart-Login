var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var logInBtn=document.getElementById('logInBtn');
var form = document.getElementById('myForm');
var userData=[];

if(localStorage.getItem('userData')){
    userData=JSON.parse(localStorage.getItem('userData'));
}

logInBtn.addEventListener('click' , function(){
    logIn();
})
function logIn(){
    if (!validateInputs()) {
        return;
    }  
    if(checkEmailPassword() == true){
        location.href="./home.html";
    }
    else
    {
        Swal.fire({
            icon: "error",
            title: "Invalid Email or Invalid Password",
            text: "Make sure you have an account. Enter the account information correctly. ",
        });
    }

}

function checkEmailPassword(){
    for(var i =0;i < userData.length; i++){
        if(userData[i].userEmail == emailInput.value && userData[i].userPassword == passwordInput.value){
            var userName = userData[i].userName;
            localStorage.setItem('userName' , userName);
            return true;
    }
    }
}
function validateInputs() {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //starts with letters, numbers, dots, or underscores.Has an "@" followed by a domain name.Ends with a valid top-level domain (e.g., .com, .org).
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;//Be 8 to 20 characters long.Include at least one uppercase letter, one lowercase letter, one number, and one special character.

    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "starts with letters, numbers, dots, or underscores.Has an @ followed by a domain name.Ends with a valid top-level domain (e.g., .com, .org).",
        });
        return false;
    }

    if (!passwordInput.value.trim() || !passwordRegex.test(passwordInput.value.trim())) {
        Swal.fire({
            icon: "error",
            title: "Invalid Password",
            text: "Be 8 to 20 characters long.Include at least one uppercase letter, one lowercase letter, one number, and one special character.",
        });
        return false;
    }

    return true;
}

















form.addEventListener('submit', function(event){
    event.preventDefault();
});