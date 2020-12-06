// input to enter room code
// input to enter display name

// button to enter room code (brings you to Just Joined Room)
import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import {FormControl, InputGroup, Button, Col} from 'react-bootstrap';

class JoiningARoom extends React.Component {
    render() {
        return(
            <>
            <div className="loggedin"> You are logged in as: 
                <InputGroup size="sm" className="mb-3">
                <Col xs={4}>
                <FormControl
                placeholder="Butterfly"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                </Col>
                </InputGroup>

            </div>
            <div> Numbers of users in room: </div>
                    <InputGroup size="sm" className="mb-3">
                    <Col xs={2}>
                    <FormControl
                    placeholder="5"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    </Col>
                    </InputGroup>
            <div> Room Number:
                <InputGroup size="sm" className="mb-3">
                <Col xs={2}>
                <FormControl
                placeholder="45789"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                </Col>
                </InputGroup>

            </div>
            <div className="judge">Judge</div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1084px-Unknown_person.jpg" alt="judge" className="judge-image"/>
            <div className="player">Player</div>
            <img src="https://prepsec.org/wp-content/uploads/2017/09/unknown-person-icon-Image-from.png" alt="person" className="person"/>
            <Button className="button-start">Start</Button>
            </>
        )
    }
}

export default JoiningARoom;