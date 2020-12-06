import React from 'react';
import Welcome from './screens/Welcome';
import Firebase from "firebase";
import config from './services/config';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Welcome from './screens/Welcome';
// import InGame from './screens/InGame';

// import logo from './logo.svg';
import './App.css';
import './App.scss';


class App extends React.Component {

  constructor(props) {
    super(props);

    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
   }else {
      Firebase.app(); // if already initialized, use that one
   }
    //Firebase.initializeApp(config.firebase);

    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  // const account = localStorage.getItem('token') == null ? (< Welcome setUser={this.setUser} />) : (<InGame user_id={this.state.user_id} />)


  render (){

    return(
    <div className="App">
      <Welcome></Welcome>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header--> */}
    </div>
    )};
}

export default App;
