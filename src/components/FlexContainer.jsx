import React from 'react'

function FlexContainer(props) {

    const styleFlex = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap:"15px",
        width: "100%"
    };

    return (
        <div style={styleFlex}>
            {props.children}
        </div>    
    )
}

export default FlexContainer