var database = firebase.database();

function submitAdForm(){
    var form = document.getElementById("submitAdForm");
    var title = form.title.value;
    var description = form.description.value;
    var category = form.category.options[form.category.selectedIndex].value;

//Uploading Image To Storage 

    const ref = firebase.storage().ref();
    const file = document.getElementById("addimage").files[0]
    const name = (+new Date()) + '-' + file.name;
    const metadata = {
    contentType: file.type
    };
    const task = ref.child("Ads").child(name).put(file, metadata);
    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
        //adding Data TO Database 
    
    var uid = firebase.auth().currentUser.uid;
    var newAd = database.ref(`Ads/${category}`).push();
    newAd.set({
        title: title,
        description: description,
        price: price,
        uid : uid,
        url : url
    })
        })
    .catch(console.error);
    }