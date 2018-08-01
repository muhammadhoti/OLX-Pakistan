function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        console.log(error);
      });
    }
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // console.log(user);
        // User is signed in.
        document.getElementById("activeUser").style.display="block";
        document.getElementById("inActiveUser").style.display="none";
        document.getElementById("postad").style.display="block";
        // document.getElementById("greetUser").style.display="block";
        // document.getElementById("greetUser").style.color="yellow";
        // document.getElementById("greetUser").innerHTML = `Welcome ${firebase.auth().currentUser.displayName} !`;
        document.getElementById("userProfile").innerHTML=firebase.auth().currentUser.displayName;
        document.getElementById(`suh`).innerHTML = `Ads Favourite By ${firebase.auth().currentUser.displayName}`
        document.getElementById("userProfile").style.display="block";
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
          var a =list[i].parentElement.parentElement.parentElement;
          a.parentElement.removeChild(a);
  
        }
      }
    }
  
  //HomePageCategoySelection
  
//   function selectCategory() {
//     // var categoryOnHomepage = document.getElementById(`homePageCategorySelection`);
//     // categoryOnHomepage.options[categoryOnHomepage.selectedIndex].value;
//     var selectCategory = document.getElementById(`homePageCategorySelection`);
//     selectCategory.options[selectCategory.selectedIndex].value;
//     var categoryDivs =document.getElementsByClassName(`category`);
  
//     for(i=0 ;i<categoryDivs.length ;i++){
  
      
//       // console.log(categoryDivs[i].innerHTML);
//       if(selectCategory.options[selectCategory.selectedIndex].value === `All Categories`){
//         categoryDivs[i].parentElement.parentElement.parentElement.style.display="";
//       }
//       else if(selectCategory.options[selectCategory.selectedIndex].value === `${categoryDivs[i].innerHTML}`){
//         // console.log(categoryDivs[i].innerHTML)
//         categoryDivs[i].parentElement.parentElement.parentElement.style.display="";
//       }
//       else{
//         categoryDivs[i].parentElement.parentElement.parentElement.style.display="none";
//       }
//     }
//   }
    
    