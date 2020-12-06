import React from 'react';
import Button from 'react-bootstrap/Button';
import Firebase, {FirebaseContext} from '../services/firebase';


class CreateGame extends React.Component {

    render() {
        return(
            <Button> Create a Game </Button>
        )
    }
}

export default CreateGame;