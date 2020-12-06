import React from 'react';

class YAxis extends React.Component {

    render () {

        const yAxisStyle = {
            margin: "10"
        };

        return(
            <svg width="20" height="250" style = { yAxisStyle }>
                    {/* arrow head */}
                    <line x1="10" y1="25" x2="0" y2="35" stroke="black" stroke-width="2"></line>

                    <line x1="10" y1="25" x2="20" y2="35" stroke="black" stroke-width="2"></line>

                    {/* vertical line */}
                    <line x1="10" y1="25" x2="10" y2="200" stroke="black" stroke-width="2"></line>

                    {/* notches */}
                    <line x1="5" y1="50" x2="15" y2="50" stroke="black" stroke-width="2"></line>

                    <line x1="5" y1="75" x2="15" y2="75" stroke="black" stroke-width="2"></line>

                    <line x1="5" y1="100" x2="15" y2="100" stroke="black" stroke-width="2"></line>

                    <line x1="5" y1="125" x2="15" y2="125" stroke="black" stroke-width="2"></line>

                    <line x1="5" y1="150" x2="15" y2="150" stroke="black" stroke-width="2"></line>

                    <line x1="5" y1="175" x2="15" y2="175" stroke="black" stroke-width="2"></line>
            </svg>
        )
    }
}

export default YAxis;