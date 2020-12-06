import React from 'react';
import Button from 'react-bootstrap/Button';
 
import  Firebase,{ FirebaseContext } from '../services/firebase';
 
class SomeComponent extends React.Component {
  signin = () =>{
    console.log(Firebase.auth)
    // Firebase.auth().signInAnonymously()
    // .then(() => {
    //   console.log('signed in')
    // })
    // .catch((error) => {
    //   let errorCode = error.code;
    //   let errorMessage = error.message;
    //   console.log(errorCode, ":", errorMessage)
    // })
    // Firebase.auth().onAuthStateChanged((user) =>{
    //   if(user) {
    //     const uid = user.uid;
    //     console.log(uid)
    //   }else{
    //     console.log('signed out')
    //   }
    // })
} 

  render() {
    return(
  <FirebaseContext.Consumer>
    {firebase => {
      return <Button onClick={() => this.signin()}>I've access to Firebase and render something.</Button>;
    }}
  </FirebaseContext.Consumer>
    )
  }
};
 
export default SomeComponent;