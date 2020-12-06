import React from 'react';
import XAxis from './Xaxis';

import Card from 'react-bootstrap/Card';

class Xcard extends React.Component {

    render() {

        const xStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flexEnd",
            width: "18Rem",
            alignItems: "center"
            
            
        };

        // const titleStyle = {
        //     alignSelf: "center"
        // }

        return(
            <Card style = { xStyle }>
                <XAxis /*style = {titleStyle}*/> </XAxis>
                <Card.Body /*style = {titleStyle}*/> 
                    <Card.Title >X-axis title</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}


// https://react-bootstrap.github.io/components/forms/
// readOnly and plaintext

export default Xcard;