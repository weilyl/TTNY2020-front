import React from 'react';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Firebase, {FirebaseContext} from '../services/firebase';


class CreateGame extends React.Component {

    render() {
        return(
            <Link to='/room'> 
            <Button>Create a Game</Button>
            </Link>
        )
    }
}

export default CreateGame;