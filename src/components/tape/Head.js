import { Autocomplete, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useRef, forwardRef } from "react";
import Draggable from "react-draggable";


function Head({}) {
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
    const rightBoundary = 0;
    const tapeInternalState = "0"; // searchText
    const options = ['HALT', '0', '1']; 
    const filter = (searchText, key) => 
        (searchText === "" || key.startsWith(searchText) && key !== searchText);
    const fontColor = tapeInternalState === "HALT" ? "#1976D2" : "#FF3D00";


    // fixes react strict mode warning
    const nodeRef = useRef(null);

    const styles = {
        header: {
            maxWidth: '130px',
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
            width: '150px', // ???
            position: 'relative',
            textAlign: 'center',
        },
        headInput: {
            fontFamily: 'Roboto Mono',
            color: fontColor,
            textAlign: 'center',
        },
        textField: {
            width: 30,
            left: 0,
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
            width: '30px', // these two are controlled by prop
            left: '0px'
        },
        neck: {
            width: '0.5px',
            height: '10px',
            position: 'relative',
            left: '15%',
            backgroundColor: 'black',
            border: '1px solid black',
        },
        shoulder: {
            width: '30px',
            height: '0.5px',
            position: 'relative',
            left: '0px',
            backgroundColor: 'black',
            border: '1px solid black',
        }
    }

    const getAutocompleteField = (params) => {
        return (
            <TextField 
                {...params}
                style={styles.textField}
                InputProps={{
                    ...params.InputProps, 
                    style: styles.headInput,
                    disableUnderline: true,
                    endAdornment: null
                }}
                inputProps={{
                    ...params.inputProps,
                    maxLength: 20
                }}
                label="Internal State" 
                disabled={isRunning /*|| isEditingExpectedTape */}
            />
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
                        renderInput={getAutocompleteField}
                        clearOnEscape
                        clearOnBlur={false}
                        openOnFocus={false}
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
                grid={[49, 0]}
                zIndex={100}
                bounds={{left: 57, top: 0, right: rightBoundary}}
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