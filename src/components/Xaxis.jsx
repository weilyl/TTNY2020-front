import React from 'react';

class XAxis extends React.Component {

    render () {

        const xAxisStyle = {
            margin: "10"
        };

        return(
            <svg width="250" height="110" style = { xAxisStyle }>
                    {/* arrow head */}
                    <line x1="220" y1="80" x2="230" y2="95" stroke="black" stroke-width="2"></line>
                    <line x1="215" y1="105" x2="230" y2="95" stroke="black" stroke-width="2"></line>

                    {/* vertical line */}
                    <line x1="230" y1="93" x2="20" y2="93" stroke="black" stroke-width="2"></line>

                    {/* notches */}
                    <line x1="200" y1="100" x2="200" y2="80" stroke="black" stroke-width="2"></line>

                    <line x1="170" y1="100" x2="170" y2="80" stroke="black" stroke-width="2"></line>

                    <line x1="140" y1="100" x2="140" y2="80" stroke="black" stroke-width="2"></line>

                    <line x1="110" y1="100" x2="110" y2="80" stroke="black" stroke-width="2"></line>

                    <line x1="80" y1="100" x2="80" y2="80" stroke="black" stroke-width="2"></line>

                    <line x1="50" y1="100" x2="50" y2="80" stroke="black" stroke-width="2"></line>
            </svg>
        )
    }
}

export default XAxis;