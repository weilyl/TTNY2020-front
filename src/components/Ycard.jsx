import React from 'react';
import { Yaxis as yAxis } from './Yaxis';

import Card from 'react-bootstrap/Card';

class Ycard extends React.Component {

    render() {

        const yStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flexEnd",
            width: "18Rem"
        };

        return(
            <Card style = { yStyle }>
                <Card.body>
                    <Card.Title/>
                    <yAxis/>
                </Card.body>
            </Card>
        )
    }
}


// https://react-bootstrap.github.io/components/forms/
// readOnly and plaintext

export default Ycard;