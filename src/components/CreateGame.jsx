import React from 'react';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

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