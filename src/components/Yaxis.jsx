import React from 'react';

class Yaxis extends React.Component {

    render () {

        const yStyle = {
            marginRight: "0",
            padding: "10"
        };

        return(
            <svg width="15" height="250">
                    <line x1="20" y1="20" x2="20" y2="200" stroke="black" stroke-width="2"></line>
            </svg>



            // <>
            //     <style>
            //         svg#chart {background: lightgray;}
            //         #chart line {stroke: #555555; stroke-width:1}
            //     </style>
            //     <svg id="chart" width="300" height="225">
            //         <line x1="20" y1="20" x2="20" y2="130"></line>
            //     </svg>
            // </>
        )
    }
}

export default Yaxis;