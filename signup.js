//Data Base Reference 
var database = firebase.database();
function signUp(){
    var form = document.getElementById("signUpForm");
    var userName = form.userName.value;
    var email = form.email.value;
    var password = form.password.value;
//firebase Mehtod
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        document.getElementById("alreadyAccount").style.display = "block";
        document.getElementById("alreadyAccount").innerHTML = errorMessage;
        
        }).then(()=>{
//adding Data TO Database 
        var uid = firebase.auth().currentUser.uid
        var newUserRef = database.ref(`users/${uid}`).push();
        newUserRef.set({
        userName: userName,
        email: email,
        password: password,
        uid : uid})
        })
    }
//sign in button
function goToSignIn(){
    window.location.href = "signin.html";
}