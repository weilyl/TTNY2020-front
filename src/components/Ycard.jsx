import React from 'react';
import YAxis from './Yaxis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';



import Card from 'react-bootstrap/Card';

class Ycard extends React.Component {

    render() {

        const yStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flexEnd",
            width: "18Rem",
            alignItems: "center"
        };


        // const titleStyle = {
        //     alignSelf: "center"
        // }

        return(
            <Card style = { yStyle }>
                <Card.Header >< FontAwesomeIcon icon ="heart" /></Card.Header>
                <Card.Body /*style = {titleStyle}*/> 
                    <Card.Title >Y-axis title</Card.Title>
                </Card.Body>
                <YAxis /*style = {titleStyle}*/> </YAxis>
            </Card>
        )
    }
}


// https://react-bootstrap.github.io/components/forms/
// readOnly and plaintext

export default Ycard;