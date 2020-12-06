import React from 'react';

class Yaxis extends React.Component {

    render () {
        return(
            <svg /*viewBox="100 100 0 0"*/ width='50' height='250'>
                {/*<g color="green">*/}
                    <line x1="20" y1="20" x2="20" y2="200"></line>
                {/*</g>*/}
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