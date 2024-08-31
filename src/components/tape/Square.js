import { standardizeSquareId } from "@/features/tape/tape";
import { fillTape } from "@/features/tape/tapeSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Square({ order, mark, id }) {
    // TODO: instead of making it based on bg color, assign each bg color a state
    const [bgColor, setBgColor] = useState("#fff");

    const cell = useSelector((state) => state.tape.tapeCellsById[id])
    const dispatch = useDispatch();

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

    const focusOnPrev = () => {
        document.getElementById(cell.prev).focus();
    }
    const focusOnNext = () => {
        document.getElementById(cell.next).focus();
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
    const onKeyDown = (e) => {
        var key = e.key;
        e.preventDefault();

        if (key === "ArrowLeft") {
            focusOnPrev();
        } else if (key === "ArrowRight") {
            focusOnNext();
        } else if (key === "Backspace" || key === "Delete") {
            dispatch(fillTape({ id: id, val: "" }))
        } else if (/^[0-9a-zA-z]$/.test(key)) {
            let val = key.toUpperCase();
            if (key === "3" && e.shiftKey) val = "#";
            if (key === "4" && e.shiftKey) val = "$";
            dispatch(fillTape({ id: id, val: val }))
            focusOnNext();
        }
    }

    return (
        <input 
            className={"square"}
            style={
                /* TODO: if this is highlighted cell, {"backgroundColor": "#87dbff"}, else... */
                { ...style, backgroundColor: bgColor }
            }
            onKeyDown={onKeyDown}
            value={cell.val}
            id={id}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    );
}

export default Square;