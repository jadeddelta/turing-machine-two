import { DRAGGABLE_LEFT_BOUNDARY, DRAG_GRID_INTERVAL } from "@/features/gui/gui";
import { headStringChanged } from "@/features/gui/guiSlice";
import { headStateChanged } from "@/features/tape/tapeSlice";
import { Autocomplete, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useRef, forwardRef } from "react";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";


function Head({}) {
    const { 
        headX,
        headWidth,
        headLeftOffset,
        rightBoundary
    } = useSelector((state) => state.gui);
    const tapeInternalState = useSelector((state) => state.tape.tapeInternalState);

    const dispatch = useDispatch();

    const handleInputChange = (e, v, r) => {
        dispatch(headStateChanged(v));
        dispatch(headStringChanged(v));
        document.getElementById("HEAD_INPUT_1").focus(); //TODO: this is a hack
        //TODO: it also loses focus upon hitting backspace with 1 character
    }

    //TODO: redux state
    const handleStart = () => {
        console.log("dispatch highlightCorrespondingCellAction(true)")
    }
    const handleEnd = () => {
        console.log("dispatch highlightCorrespondingCellAction(false)")
    }
    const handleDrag = () => {
        console.log("dispatch custon fn?")
    }
    const headPosition = 0;
    const isRunning = false;
    const options = ['HALT', '0', '1']; 
    const filter = (searchText, key) => 
        (searchText === "" || key.startsWith(searchText) && key !== searchText);
    const fontColor = tapeInternalState === "HALT" ? "#1976D2" : "#FF3D00";


    // fixes react strict mode warning
    const nodeRef = useRef(null);

    const styles = {
        header: {
            width: headWidth,
            left: headLeftOffset,
            textAlign: 'left',
            position: 'relative',
            ":hover": {
                cursor: 'move',
                cursor: 'grab',
                cursor: '-moz-grab',
                cursor: '-webkit-grab'
            },
            ":active": {
                cursor: 'grabbing',
                cursor: '-moz-grabbing',
                cursor: '-webkit-grabbing'
            }
        },
        head: {
            fontFamily: 'Roboto Mono, monospace',
            background: '#fff',
            border: '1px solid',
            fontSize: '18px',
            fontWeight: 'bold',
            height: 'auto',
            width: '30px', 
            position: 'relative',
            textAlign: 'center',
        },
        headInput: {
            fontFamily: 'Roboto Mono, monospace',
            color: fontColor,
            textAlign: 'center',
        },
        textField: {
            width: headWidth,
            height: 30,
            color: grey[900],
            textAlign: 'center',
            outlineWidth: 0,
        },
        hair: {
            height: '6.5px',
            position: 'relative',
            backgroundColor: 'black',
            border: '2px solid black',
            width: headWidth, 
        },
        neck: {
            width: '0.5px',
            height: '10px',
            position: 'relative',
            left: '50%',
            backgroundColor: 'black',
            border: '1px solid black',
        },
        shoulder: {
            width: '30px',
            height: '0.5px',
            position: 'relative',
            left: headLeftOffset,
            backgroundColor: 'black',
            border: '1px solid black',
        }
    }

    const getAutocompleteField = (params) => {
        return (
            <div ref={params.InputProps.ref}>
                <input 
                    type="text" 
                    {...params.inputProps} 
                    style={{...styles.headInput, ...styles.textField}} 
                />
            </div>
        )
    }

    const NestedComponent = forwardRef((props, ref) => {
        return (
            <div ref={ref} {...props}>
                <div className="header" style={styles.header}>
                    <div className="hair" style={styles.hair} />
                    <Autocomplete
                        className="head"
                        style={styles.head}
                        id="HEAD_INPUT_1"
                        options={options}
                        value={tapeInternalState}
                        onInputChange={(e, v, r) => {
                            handleInputChange(e, v, r);    
                        }}
                        renderInput={getAutocompleteField}
                        clearOnEscape
                        clearOnBlur={false}
                        openOnFocus={false}
                        freeSolo
                    />
                    <div className="neck" style={styles.neck} />
                    <div className="shoulder" style={styles.shoulder} />
                </div>
            </div>
        )
    })

    return (
        <div className="draggable-head" id="draggable-head">
            <Draggable
                axis="x"
                handle=".header"
                position={{ x: headPosition, y: 0 }}
                grid={[DRAG_GRID_INTERVAL, 0]}
                zIndex={100}
                bounds={{left: DRAGGABLE_LEFT_BOUNDARY, top: 0, right: rightBoundary}}
                onStart={handleStart}
                onStop={handleEnd}
                onDrag={handleDrag}
                disabled={isRunning}
                nodeRef={nodeRef}
            >
                <NestedComponent ref={nodeRef} />
            </Draggable>
        </div>
    );
}

export default Head;