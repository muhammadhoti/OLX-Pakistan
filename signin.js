function signIn(){
    var form = document.getElementById("signInForm");
    var email = form.email.value;
    var password = form.password.value;
//firebase Mehtod
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    document.getElementById("wrongInfo").style.display = "block";
    document.getElementById("wrongInfo").innerHTML = errorMessage;
    if(errorMessage !== ""){
        window.location.href = "index.html";        
    }
        })
}
function goToSignUp(){
    window.location.href = "signup.html";
}