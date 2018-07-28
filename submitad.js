var database = firebase.database();

function submitAdForm(){
    var form = document.getElementById("submitAdForm");
    var title = form.title.value;
    var description = form.description.value;
    var category = form.category.options[form.category.selectedIndex].value;
    var price = form.price.value;

//Uploading Image To Storage 

    const ref = firebase.storage().ref();
    const file = document.getElementById("addimage").files[0]
    const name = (+new Date()) + '-' + file.name;
    const metadata = {
    contentType: file.type
    };
    const task = ref.child("ads").child(name).put(file, metadata);
    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
        //adding Data TO Database 
    
    var uid = firebase.auth().currentUser.uid;
    var newAd = database.ref(`ads`).push();
    newAd.set({
        title: title,
        description: description,
        price: price,
        uid : uid,
        url : url,
        category : category
    })
        })
    .catch(console.error);
    }