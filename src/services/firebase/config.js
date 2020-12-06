import app from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAgF02Sv_rKe4FZwAfrvJWsqGXcZHk_808",
    authDomain: "laughs-at-graphs.firebaseapp.com",
    projectId: "laughs-at-graphs",
    databaseURL: "https://ttny2020-swccsi-hackathon.herokuapp.com/",
    storageBucket: "laughs-at-graphs.appspot.com",
    messagingSenderId: "37243832535",
    appId: "1:37243832535:web:ce27988af74dfc3dddc892",
    measurementId: "G-LKB8WTGCFD"
  }

  // var firebaseConfig = {
  //   apiKey: "AIzaSyAgF02Sv_rKe4FZwAfrvJWsqGXcZHk_808",
  //   authDomain: "laughs-at-graphs.firebaseapp.com",
  //   projectId: "laughs-at-graphs",
  //   storageBucket: "laughs-at-graphs.appspot.com",
  //   messagingSenderId: "37243832535",
  //   appId: "1:37243832535:web:ce27988af74dfc3dddc892",
  //   measurementId: "G-LKB8WTGCFD"
  // };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }
    }

  // Auth API



  export default Firebase;