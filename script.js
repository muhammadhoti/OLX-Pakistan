if ('serviceWorker' in navigator) {
  window.addEventListener('load', ev => {
    navigator.serviceWorker.register('service-worker.js')
      .then(res => console.log('registered!!!'))
      .catch(err => console.log(err));
  })
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // console.log(user);
    // User is signed in.
    document.getElementById("activeUser").style.display="block";
    document.getElementById("inActiveUser").style.display="none";
    document.getElementById("postad").style.display="block";
    document.getElementById("greetUser").style.display="block";
    document.getElementById("greetUser").style.color="yellow";
    document.getElementById("greetUser").innerHTML = `Welcome ${firebase.auth().currentUser.displayName} !`;
  } else {
    // No user is signed in.
  } 
});

function signOut(){
firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}

function adCard(){
 return`
  <div class="cardstyling col-lg-4 col-sm-6 portfolio-item">
    <div class="card h-100">
      <small></small>
      <img class="validate card-img-top" src=""/>
      <div class="card-body">
        <h4 class="card-title"></h4>
        <p class="validate card-text"></p>
        <h5></h5>
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
  // console.log(keys);
  
  for(var i =0 ; i<keys.length ; i++){
    var k = keys[i];
    var category = ads[k].category;
    var description = ads[k].description;
    var title = ads[k].title;
    var uid = ads[k].uid;
    var url = ads[k].url;
    var price = ads[k].price;
    var displayName = ads[k].displayName;
    // console.log(category,description,title,uid,url,price);

    adCard();
    createAdCard();
    document.getElementsByTagName(`small`)[i].innerHTML="Ad By "+displayName;
    document.getElementsByTagName(`img`)[i].setAttribute(`src`,url);
    document.getElementsByTagName(`h4`)[i].innerHTML= title;
    document.getElementsByTagName(`p`)[i].innerHTML=description;
    document.getElementsByTagName(`h5`)[i].innerHTML="Rs. "+price;
   
  }
  
}
function errData(err){
  console.log(`Errorrr!!!`);
  console.log(err);
}
