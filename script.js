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
    // document.getElementById("greetUser").style.color="yellow";
    // document.getElementById("greetUser").innerHTML = `Welcome ${firebase.auth().currentUser.displayName} !`;
    document.getElementById("userProfile").innerHTML=firebase.auth().currentUser.displayName;
    
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
  
  if(firebase.auth().currentUser === null){
    return`
    <div class="cardstyling col-lg-4 col-sm-6 portfolio-item">
      <div class="card h-100">
        <small></small>
        <img class="validate card-img-top" src=""/>
        <div class="card-body">
          <h3 class="card-title"></h3>
          <h4 class="category"></h4>
          <p class="validate card-text"></p>
          <h5></h5>
        </div>
      </div>
    </div>
  `
  }else{
 return`
  <div class="cardstyling col-lg-4 col-sm-6 portfolio-item">
    <div class="card h-100">
      <small></small>
      <img class="validate card-img-top" src=""/>
      <div class="card-body">
      <h3 class="card-title"></h3>
      <h4 class="category"></h4>
        <p class="validate card-text"></p>
        <h5></h5>
        <button type="button" class="btn btn-primary" onclick="sendMessage()">Message</button>
      </div>
    </div>
  </div>
`}
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
    // console.log(`cateogry:${category}`,`description:${description}`,title,uid,url,price);
    adCard();
    createAdCard();
    document.getElementsByTagName(`small`)[i].innerHTML="By "+displayName;
    document.getElementsByTagName(`img`)[i].setAttribute(`src`,url);
    document.getElementsByTagName(`h3`)[i].innerHTML= title;
    document.getElementsByTagName(`p`)[i].innerHTML=description;
    document.getElementsByTagName(`h5`)[i].innerHTML="Rs. "+price;
    document.getElementsByTagName(`h4`)[i].innerHTML= `${category}`;
                                        }
}
function errData(err){
  console.log(`Errorrr!!!`);
  console.log(err);
}

//search function
function searchFunction() {
  var search = document.getElementById('search');
  var filter = search.value.toUpperCase();
  var list =document.getElementsByClassName('card-title');
  for(i=0 ;i<list.length ;i++){
    // console.log(list[i].innerText);
      if(list[i].innerText.toUpperCase().indexOf(filter) > -1){
        list[i].parentElement.parentElement.parentElement.style.display="";
      }
    else{
      list[i].parentElement.parentElement.parentElement.style.display="none";
    }
  }
}

//HomePageCategoySelection

function selectCategory() {
  // var categoryOnHomepage = document.getElementById(`homePageCategorySelection`);
  // categoryOnHomepage.options[categoryOnHomepage.selectedIndex].value;
  var selectCategory = document.getElementById(`homePageCategorySelection`);
  selectCategory.options[selectCategory.selectedIndex].value;
  var categoryDivs =document.getElementsByClassName(`category`);

  for(i=0 ;i<categoryDivs.length ;i++){

    
    // console.log(categoryDivs[i].innerHTML);
    if(selectCategory.options[selectCategory.selectedIndex].value === `All Categories`){
      categoryDivs[i].parentElement.parentElement.parentElement.style.display="";
    }
    else if(selectCategory.options[selectCategory.selectedIndex].value === `${categoryDivs[i].innerHTML}`){
      // console.log(categoryDivs[i].innerHTML)
      categoryDivs[i].parentElement.parentElement.parentElement.style.display="";
    }
    else{
      categoryDivs[i].parentElement.parentElement.parentElement.style.display="none";
    }
  }
}


