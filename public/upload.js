   function uploadImage() {
        const ref = firebase.storage().ref("images/");
        const file = document.querySelector("#photo").files[0];
        const name = +new Date() + "-" + file.name;
        const metadata = {
            contentType: file.type
        };
        const task = ref.child(name).put(file, metadata);
        task
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                console.log(url);
                document.querySelector("#image").src = url;
            })
            .catch(console.error);
    }