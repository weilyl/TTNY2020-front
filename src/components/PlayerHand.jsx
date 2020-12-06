import React from 'react';
import Ycard from './Ycard';
import CardDeck from 'react-bootstrap/CardDeck';

class PlayerHand extends React.Component {
    render() {

        return(
            <CardDeck>
                <Ycard></Ycard>
            </CardDeck>
        )
    }
}

export default PlayerHand;