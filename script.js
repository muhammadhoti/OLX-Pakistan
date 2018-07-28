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
      <img class="card-img-top" src=""/>
      <div class="card-body">
        <h4 class="card-title">Title</h4>
        <p class="card-text">Description</p>
        <h5>Price</h5>
        <button type="button" class="btn btn-primary" onclick="sendMessage()">Message</button>
      </div>
    </div>
  </div>
`
  }

  function createAdCard(){
    document.getElementById("row").innerHTML += adCard();
  }
  

  


  var database = firebase.database();
  const adsRef = database.ref("ads");
  adsRef.on(`value`, fetchData, errData);
  
function fetchData(data){
  // console.log(data.val());
  var ads = data.val();
  var keys = Object.keys(ads);
  console.log(keys);
  for(var i =0 ; i<keys.length ; i++){
    var k = keys[i];
    var category = ads[k].category;
    var description = ads[k].description;
    var title = ads[k].title;
    var uid = ads[k].uid;
    var url = ads[k].url;
    var price = ads[k].price;
    console.log(category,description,title,uid,url,price);

    adCard();
    createAdCard();
    document.getElementsByTagName(`img`)[i].setAttribute(`src`,url);
    document.getElementsByTagName(`h4`)[i].innerHTML= title;
    document.getElementsByTagName(`p`)[i].innerHTML=description;
    document.getElementsByTagName(`h5`)[i].innerHTML=price;
      }
  }


function errData(err){
  console.log(`Errorrr!!!`);
  console.log(err);
}