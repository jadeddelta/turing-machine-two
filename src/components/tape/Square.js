import React, { useState } from "react";

function Square({ order, mark, id }) {
    // TODO: instead of making it based on bg color, assign each bg color a state
    const [bgColor, setBgColor] = useState("#fff");

    const style = {
        display: 'inline-block',
        background: '#fff',
        border: '1px solid',
        fontSize: '24px',
        fontWeight: 'bold',
        height: '50px',
        width: '50px',
        marginRight: '-1px',
        marginTop: '-1px',
        padding: 0,
        textAlign: 'center',
        outlineWidth: 0,
      }

    const onFocus = () => {
        console.log("dispatching highlightCellAtAction(order)")
    }
    const onBlur = () => {
        console.log("highlightCellAtAction(-1)")
    }
    const onMouseEnter = () => {
        if (bgColor !== "#87dbff") {
            setBgColor("#f1fc7e")
        }
    }
    const onMouseLeave = () => {
        if (bgColor !== "#87dbff") {
            setBgColor("#fff")
        }
    }

    return (
        <input 
            className={"square"}
            style={
                /* TODO: if this is highlighted cell, {"backgroundColor": "#87dbff"}, else... */
                { ...style, backgroundColor: bgColor }
            }
            onKeyDown={console.log("dispatch onKeyDown")}
            value={console.log("get value from redux state")}
            id={id}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    );
}

export default Square;