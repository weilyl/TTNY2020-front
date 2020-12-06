// grabs string as text from backend
// import nameinput for user to put a display name
// button to enter room

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {FormControl, InputGroup, Button, Col} from 'react-bootstrap';

class CreateRoom extends React.Component {
    render() {
        return(
            <>
            <div className="create-line"> Create a Game</div> 
            <div className="room-line"> Room : 
                <InputGroup size="sm" className="mb-3">
                <Col xs={2}>
                <FormControl
                placeholder="Room Number"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                </Col>
                </InputGroup>
            </div>
            <div className="name-line"> Name: 
                <InputGroup size="sm" className="mb-3">
                <Col xs={3}>
                <FormControl
                placeholder="Username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                </Col>
                </InputGroup>
            </div>
            <Link to="/joiningroom"> 
            <Button>Log In </Button>
            </Link>
            </>
        )
    }
}

export default CreateRoom;