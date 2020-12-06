import React from 'react';
import Ycard from './Ycard';
import CardDeck from 'react-bootstrap/CardDeck';
// import {Ylabels as yLabels} from './Ylabels.js';

class PlayerHand extends React.Component {
    render() {

        const deckStyle = {
            justifyContent: "space-between"
          };

        // const ycards = yLabels.map( label, index  => {
        //     return (
        //         <>
        //         <Ycard id={index}/>
        //         </>
        //     )
        // });

        return(
            <CardDeck style={deckStyle}>
                <Ycard />
            </CardDeck>
        )
    }
}

export default PlayerHand;