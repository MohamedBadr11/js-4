

var signupName= document.getElementById("signupName")
var signinemail= document.getElementById("signinemail")
var signinPassword= document.getElementById("signinPassword")
var signupemail= document.getElementById("signupemail")
var signupPassword= document.getElementById("signupPassword")
var message=document.getElementById("message")
var message2=document.getElementById("message2")
var userName=document.getElementById("userName")
var pathparts = location.pathname.split('/');

var baseURL = ''
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/' + pathparts[i]
}

var userName = localStorage.getItem('sessionUsername')
if (userName) {
    document.getElementById('userName').innerHTML =userName
}

var users=[]


if(localStorage.getItem('inputs')){
    users=JSON.parse(localStorage.getItem('inputs'))
}

function userData() {

    if (cheekValidation(signupName)&cheekValidation(signinemail)&cheekValidation(signinPassword)) {
        var user={
            sname:signupName.value,
            email:signinemail.value,
            pas:signinPassword.value,
        }
        var box=`<span class"" style="color: green;">Success</span>`
         message.innerHTML =box
    
        users.push(user);
        console.log(user);
        localStorage.setItem("inputs",JSON.stringify(users))
        clearInputs()
    }
    else if(cheekValidation(signinemail)&cheekValidation(signinPassword)){
        var box=`<span class"" style="color: red;">invalid input </span>`
        message.innerHTML =box
    }
    else{
        var box=`<span class"" style="color: red;">all input is required  </span>`
        message.innerHTML =box
    }
    
   
}

function clearInputs() {
            signupName.value=""
            signinemail.value=""
            signinPassword.value=""
}

function cheekValidation(element) {
    
    var inputsValid={
        signupName:/^[a-z].{2,8}$/i ,
        signinemail:/^[a-z].{1,}@gmail[.]com$/i,
        signinPassword:/^.{3,15}$/,
    }
    if(inputsValid[element.id].test(element.value)){
        element.classList.remove('is-invalid');
        element.classList.add('is-valid');
        return true;
    }
    else{
        element.classList.remove('is-valid');
        element.classList.add('is-invalid');
        return false;
    }
}


// login

function isLoginEmpty() {

    if (signupPassword.value == "" || signupemail.value == "") {
        return false
    } else {
        return true
    }
}

function doLogin() {

    if (isLoginEmpty()==false) {
        var box=`<span class"" style="color: red;">all input is required </span> `
        message2.innerHTML =box
        return false
    }

    var email=signupemail.value
    var password=signupPassword.value
    for (var i = 0; i <users.length ; i++) {
    if (users[i].email.toLowerCase() ==email.toLowerCase()&&users[i].pas.toLowerCase() ==password.toLowerCase()) {
        localStorage.setItem('sessionUsername', users[i].sname)
        if (baseURL == '/') {
            location.replace('https://' + location.hostname + '/home.html')

        } else {
            location.replace(baseURL + '/home.html')

        }
    } else {
        document.getElementById('message2').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
    
    }
    
    
}

   
}
    
function cheekValidation2(element2) {
    
    var inputsValid={
        signupemail:/^[a-z].{1,}@gmail[.]com$/i,
        signupPassword:/^.{3,15}$/,
    }
    if(inputsValid[element2.id].test(element2.value)){
        element2.classList.remove('is-invalid');
        element2.classList.add('is-valid');
        return true;
    }
    else{
        element2.classList.remove('is-valid');
        element2.classList.add('is-invalid');
        return false;
    }
}
function logout() {
    localStorage.removeItem('sessionUsername')
}