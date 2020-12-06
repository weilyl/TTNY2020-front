import React from 'react';
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
=======
import Firebase, {FirebaseContext} from '../services/firebase';

>>>>>>> ad75e211e8d37f39f11aa8a9589b9621d2b48dc4

class CreateGame extends React.Component {

    render() {
        return(
<<<<<<< HEAD
            <Link to='/room'> 
            <Button>Create a Game</Button>
            </Link>
=======
            <Button> Create a Game </Button>
>>>>>>> ad75e211e8d37f39f11aa8a9589b9621d2b48dc4
        )
    }
}

export default CreateGame;