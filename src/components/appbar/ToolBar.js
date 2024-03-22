import React, { useState } from "react";
import { Toolbar, Tooltip, IconButton, CircularProgress, Divider, Slider, Typography } from "@mui/material";
import TitleBar from "./TitleBar";
import { blue, grey, cyan } from "@mui/material/colors";
import { 
    SkipPrevious as LastIcon,
    PlayArrow as PlayIcon,
    Pause as PauseIcon,
    SkipNext as NextIcon,
    Restore as RestoreIcon,
    Visibility as AnimationOnIcon,
    VisibilityOff as AnimationOffIcon,
    Redo as RedoIcon,
    Undo as UndoIcon,
    BugReport as TestIcon,
    Save as SaveIcon,
    DeleteSweep as ClearIcon,
    Menu as MenuIcon
} from "@mui/icons-material";


function ToolBar({ 
    snackbarPopupCallback,
    snackbarSetAnythingNewCallback,
    errorMessagePopupCallback,
    setErrorMessageCallback,
    trialDrawerToggleCallback
}) {
    // TODO: redux state
    const isRunning = false;
    const animationOn = false;
    const [animationSpeed, setAnimationSpeed] = useState(1.0);

    const handleSpeedChange = (event, newValue) => {
        setAnimationSpeed(newValue);
    }

    // TODO: MediaQueries for ToolBar
    // idea: https://mui.com/material-ui/react-use-media-query/

    // default values in params
    // idea: also make this into a component
    const ProgressCircle = (size=30, color=blue[400]) => {
        return (
            <CircularProgress size={size} color={color} />
        );
    }

    return (
        <div style={{ width: '100%', paddingBottom: '10px' }}>
            <TitleBar />
            <Toolbar 
                position="static" 
                sx={{ backgroundColor: cyan[50] }}
                disableGutters
            >
                <Tooltip title="Last">
                    <IconButton color={grey[50]} size="large">
                        <LastIcon />
                    </IconButton>
                </Tooltip>
                {isRunning ? 
                    animationOn ?
                        <Tooltip title="Pause">
                            <IconButton color={grey[50]} size="large">
                                <PauseIcon />
                            </IconButton>
                        </Tooltip> 
                        :
                        <ProgressCircle size={36} color={cyan[300]} />
                    :
                    <Tooltip title="Play">
                        <IconButton size="large">
                            <PlayIcon color={blue[500]} />
                        </IconButton>
                    </Tooltip>
                }
                <Tooltip title="Next">
                    <IconButton color={grey[50]} size="large">
                        <NextIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Restore">
                    <IconButton color={grey[50]} size="large">
                        <RestoreIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Clear Tape">
                    <IconButton color={grey[50]} size="large">
                        <ClearIcon />
                    </IconButton>
                </Tooltip>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />
                <Typography id="slider-label" sx={{ mr: 1 }}>
                    SPEED
                </Typography>
                <Slider 
                    value={animationSpeed}
                    onChange={handleSpeedChange}
                    min={0.1}
                    max={3.0}
                    step={0.1}
                    sx={{ width: '8vw' }}
                    size="small"
                />
                <Typography id="slider-value" sx={{ mx: 1 }}>
                    {animationSpeed.toFixed(1) + "x"}
                </Typography>
                {animationOn ?
                    <Tooltip title="Animation On">
                        <IconButton color={grey[50]} size="large">
                            <AnimationOnIcon />
                        </IconButton>
                    </Tooltip>
                    :
                    <Tooltip title="Animation Off">
                        <IconButton color={grey[50]} size="large">
                            <AnimationOffIcon />
                        </IconButton>
                    </Tooltip>
                }
                <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />
                <Tooltip title="Undo">
                    <IconButton color={grey[50]} size="large">
                        <UndoIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Redo">
                    <IconButton color={grey[50]} size="large">
                        <RedoIcon />
                    </IconButton>
                </Tooltip>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />
                <Tooltip title="Test" onClick={trialDrawerToggleCallback}>
                    <IconButton color={blue[50]} size="large">
                        <TestIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Save">
                    <IconButton color={grey[50]} size="large">
                        <SaveIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </div>
    ); 
}

export default ToolBar;