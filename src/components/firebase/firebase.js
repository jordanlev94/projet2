import app from 'firebase/app';
import 'firebase/auth'

const Config = {
    apiKey: "AIzaSyARWPHJP3EiWVpePuWzicG6rgx6tkjvsp8",
    authDomain: "cleen1-1ac31.firebaseapp.com",
    databaseURL: "https://cleen1-1ac31.firebaseio.com",
    projectId: "cleen1-1ac31",
    storageBucket: "cleen1-1ac31.appspot.com",
    messagingSenderId: "344497682944",
    appId: "1:344497682944:web:b67e3f3ed50fe0879936e5",
    measurementId: "G-2QPGPGG2XL"
  };

class Firebase{

    constructor(){
        app.initializeApp(Config)
        this.auth = app.auth();
    }
    

// Inscription 

signupUser = ( email, password) => 
this.auth.createUserWithEmailAndPassword(email, password)




// Connexion 
loginUser = ( email, password) => 
this.auth.signInWithEmailAndPassword(email, password)


//Deconnexion
signoutUser = () => this.auth.signOut()

}
export default Firebase