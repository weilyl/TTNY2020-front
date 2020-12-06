import React from 'react';
import Welcome from './screens/Welcome';
import InGame from './screens/InGame';
import CreateRoom from './screens/CreateRoom';
import Firebase from "firebase";
import config from './services/firebase/config';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.scss';
import JoiningARoom from './screens/JoiningARoom';
import JoinRoom from './components/JoinRoom';


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
      <BrowserRouter>
        <Switch>
          
          <Route path='/game'>
            <InGame />
          </Route>
          <Route path="/room" >
            <CreateRoom />
          </Route>

          <Route path="/joiningroom" >
            <JoiningARoom />
          </Route>

          <Route path='/'>
            <Welcome />
          </Route>

        </Switch>
      </BrowserRouter>
  
    </div>
    )};
}

export default App;
