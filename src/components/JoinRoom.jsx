import React from 'react';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


class JoinRoom extends React.Component {
    render(){
        return(
            <Link to='/joiningroom'> 
            <Button>Join a Room</Button>
            </Link>
        )
    }
}

export default JoinRoom;