import React from 'react';

class YAxis extends React.Component {

    render () {

        // const axisStyle = {
        //     // marginRight: "20",
        //     paddingRight: "10"
        // };

        return(
            <svg width="20" height="250" /*style = { axisStyle }*/>
                    <line x1="10" y1="25" x2="10" y2="200" stroke="black" stroke-width="2"></line>
                    <line x1="0" y1="50" x2="20" y2="50" stroke="black" stroke-width="2"></line>

                    <line x1="0" y1="75" x2="20" y2="75" stroke="black" stroke-width="2"></line>
                    <line x1="0" y1="100" x2="20" y2="100" stroke="black" stroke-width="2"></line>
                    <line x1="0" y1="125" x2="20" y2="125" stroke="black" stroke-width="2"></line>

                    <line x1="0" y1="150" x2="20" y2="150" stroke="black" stroke-width="2"></line>
                    <line x1="0" y1="175" x2="20" y2="175" stroke="black" stroke-width="2"></line>
            </svg>
        )
    }
}

export default YAxis;