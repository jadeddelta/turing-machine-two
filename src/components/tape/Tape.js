import React, { useState } from "react";
import { Box, Button, Card, IconButton, Paper, TextField, Tooltip } from "@mui/material";

import Swap from "@mui/icons-material/Autorenew";
import RollLeft from "@mui/icons-material/FastRewind";
import RollRight from "@mui/icons-material/FastForward";

import Square from "./Square";
import Head from "./Head";
import { useSelector } from "react-redux";
import { standardizeSquareId } from "@/features/tape/tape";


function Tape({ trialDrawerToggleCallback }) {
    const [isEditingTrialName, setIsEditingTrialName] = useState(false);

    const cells = useSelector((state) => state.tape.tapeCellsById);

    // TODO: redux state goes here
    let machineReportError = "this is an error message to be implemented";
    let showReportedError = true;
    let messageColor = (machineReportError === "Machine is halted!") ? "#1976D2" : "#FF3D00"

    let isEditingTrial = true;
    let isEditingExpectedTape = false; 

    let editingTrialName = "Walter";
    let totalCells = 10;

    const toggleEditTrialName = () => {
        setIsEditingTrialName(!isEditingTrialName);
    }

    const populateSquares = (start, finish) => {
        var squares = [] 
        for (var i = start; i <= finish; i++) 
            squares.push(standardizeSquareId(i));
        return squares;
    }

    return (
        <Paper 
            elevation={3}
            sx={{ mb: '10px', pb: '20px', height: '30%', width: '90%', margin: '0 auto'}}
        >
            <div 
                style={{ 
                    margin: '0 auto', 
                    visibility: showReportedError ? 'visible' : 'hidden',
                    color: messageColor, 
                    textAlign: 'center'
                }}>
                {machineReportError}
            </div>
            {isEditingTrial && (
                <div className="inline-block">
                    <Button 
                        onClick={console.log("changeEditingTarget")}
                        startIcon={<Swap color={isEditingExpectedTape ? "secondary" : "primary"} />}
                    >
                        {isEditingExpectedTape ? "Expected Tape" : "Start Tape"}
                    </Button>
                    {(
                        !isEditingTrialName ?
                            <Button onClick={toggleEditTrialName}>
                                {editingTrialName}
                            </Button> :
                            <TextField 
                                id="test-name-input"
                                variant="standard"
                                sx={{ width: '25%' }}
                                defaultValue={editingTrialName}
                            />
                    )}
                    <Button color="primary" onClick={console.log("handleSave")}>
                        Save 
                    </Button>
                    <Button onClick={console.log("handleExit")}>
                        Exit
                    </Button>
                </div>
            )}
            {!isEditingTrial && (
                <div>
                    Step: {"get step from redux state"}
                </div>
            )}

            <div className="pt-10 w-full text-center whole-tape-wrapper">
                <div className="inline-block mx-auto my-0 whole-tape">
                    <Head />
                    <Tooltip title="Roll Left">
                        <IconButton onClick={console.log("dispatch rollLeft")}>
                            <RollLeft />
                        </IconButton>
                    </Tooltip>
                    {
                        populateSquares(0, totalCells).map((i) => {
                            let mark = i;
                            if (i === 0) mark = "first";
                            if (i === totalCells - 1) mark = "last";
                            return <Square order={i} mark={mark} id={i} />
                        })
                    }
                    
                    <Tooltip title="Roll Right">
                        <IconButton onClick={console.log("dispatch rollRight")}>
                            <RollRight />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </Paper>
    );
}

export default Tape;