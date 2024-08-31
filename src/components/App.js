import React, { useEffect, useState } from "react";
import TestDrawer from "./drawer/TestDrawer";
import { Button } from "@mui/material";
import Tape from "./tape/Tape";
import ToolBar from "./appbar/ToolBar";
import DynamicRuleTable from "./table/DynamicRuleTable";
import { useDispatch } from "react-redux";
import { screenResized } from "@/features/gui/guiSlice";
import { highlightedCell } from "@/features/tape/tapeSlice";

function App() {
    const dispatch = useDispatch();

    // set screen size on component mount 
    useEffect(() => {
        dispatch(screenResized({ screenSize: window.innerWidth }))

        window.addEventListener("resize", () => {
            dispatch(screenResized({ screenSize: window.innerWidth }));
            dispatch(highlightedCell(null));
        });
    }, [dispatch]);

    const [saveMachineResponseOpen, setSaveMachineResponseOpen] = useState(false);
    const [anythingNewWithMachine, setAnythingNewWithMachine] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [trialDrawerToggle, setTrialDrawerToggle] = useState(false);

    const handleTrialDrawerToggle = () => {
        setTrialDrawerToggle(!trialDrawerToggle);
    }

    const handleTrialDrawerClose = () => {
        setTrialDrawerToggle(false);
    }

    const handleSaveMachineResponseOn = () => {
        setSaveMachineResponseOpen(true);
    }

    const handleSaveMachineResponseClose = () => {
        setSaveMachineResponseOpen(false);
    }

    const handleDialogOpen = () => {
        setDialogOpen(true);
    }

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    const handleSetErrorMessage = (message) => {
        setErrorMessage({ errorMessage: message.toString(), dialogOpen: true });
    }

    const handleSetAnythingNewWithMachine = (flag) => {
        setAnythingNewWithMachine(flag);
    }

    const snackbarMessages = {
        successful: "Saved successfully!",
        nothingNew: "Nothing new to save!"
    }

    return (
        <>
            <TestDrawer open={trialDrawerToggle} handleClose={handleTrialDrawerClose} />
            <ToolBar 
                snackbarPopupCallback={handleSaveMachineResponseOn}
                snackbarSetAnythingNewCallback={handleSetAnythingNewWithMachine}
                errorMessagePopupCallback={handleDialogOpen}
                setErrorMessageCallback={handleSetErrorMessage}
                trialDrawerToggleCallback={handleTrialDrawerToggle}
            />
            <Tape trialDrawerToggleCallback={handleTrialDrawerToggle} />
            <DynamicRuleTable />
        </>
    );
}

export default App;