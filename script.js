var db= firebase.database();
// ref = database.ref(`Ads`);
// ref.on(`value`, gotData);
// function gotData(data){
//   // console.log(data.val());
//   var categories = data.val();
//   var keys = Object.keys(categories);
//   console.log(keys);
// }
// function checking (){
// var user = firebase.auth().currentUser;
// if (user) {
//   // User is signed in.
//   alert("Already Signed In");
// } else {
//   // No user is signed in.
//   alert("sign In first");
// }
// }
// function signOut(){
// firebase.auth().signOut().then(function() {
//     // Sign-out successful.
//   }).catch(function(error) {
//     // An error happened.
//     console.log(error);
//   });
// }



function adCard(){
  return`
  <div class="cardstyling col-lg-4 col-sm-6 portfolio-item">
    <div class="card h-100">
      <img class="card-img-top" id="fetchImage" src=""/>
      <div class="card-body">
        <h4 class="card-title" id="fetchTitle">Title</h4>
        <p id="fetchDescription" class="card-text">Description</p>
        <h5 id="fetchPrice">Price</h5>
        <button type="button" class="btn btn-primary" onclick="sendMessage()">Message</button>
      </div>
    </div>
  </div>
  `
  }

function createAdCard(){
    document.getElementById("row").innerHTML += adCard();
  }

function fetchData(){

}

db.ref(`\Ads`).on(`value`,snap => console.log(snap.val()))
