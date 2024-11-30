var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var signUpBtn =document.getElementById('signUpBtn');
var form = document.getElementById('myForm');
var userData;

if(localStorage.getItem('userData')){
    userData=JSON.parse(localStorage.getItem('userData'));
}
else{
    userData=[];
}

signUpBtn.addEventListener('click' , function(){
    signUp();
})

function signUp(){
    if (!validateInputs()) {
        return;
    }   

    var data={
        userName :nameInput.value,
        userEmail :emailInput.value,
        userPassword :passwordInput.value,
    }
    if (userData.some(user => user.userEmail === emailInput.value)) {
        Swal.fire({
            icon: "warning",
            title: "Duplicate Account",
            text: "This Email already exists!",
        });
        return;
    }

    userData.push(data);
    console.log(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
    clearInputs();

    var Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.resumeTime;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });

    setTimeout(navigate, 3000);
}

function validateInputs() {
    var usernameRegex = /^[a-zA-Z0-9]([._]?[a-zA-Z0-9]){2,19}$/;//Be 8 to 20 characters long. Include at least one uppercase letter, one lowercase letter, one number, and one special character.
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //starts with letters, numbers, dots, or underscores.Has an "@" followed by a domain name.Ends with a valid top-level domain (e.g., .com, .org).
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;//Be 8 to 20 characters long.Include at least one uppercase letter, one lowercase letter, one number, and one special character.

    if (!nameInput.value.trim() || !usernameRegex.test(nameInput.value.trim())) {
        Swal.fire({
            icon: "error",
            title: "Invalid Name",
            text: "Name must Be 8 to 20 characters long. Include at least one uppercase letter, one lowercase letter, one number, and one special character.",
        });
        return false;
    }

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

function navigate() {
    location.href="./index.html";//why not work when ../
}
function clearInputs(){
    nameInput.value = null;
    emailInput.value = null;
    passwordInput.value = null;
}

form.addEventListener('submit', function(event){
    event.preventDefault();
});





