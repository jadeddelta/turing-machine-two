import React, { useState } from "react";

import { 
    ListItem, 
    IconButton,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Menu,
    MenuItem,
    ListItemIcon,
    Divider
} from "@mui/material";
import { 
    MoreVert as MenuIcon, 
    Check as PassIcon,
    Clear as FailIcon,
    AccessAlarm as TimeoutIcon,
    QuestionMark as HasNotRunIcon,
    PlayCircleOutline as RunIcon,
    Create as EditIcon,
    Upload as UploadIcon,
    Download as DownloadIcon,
    DeleteForever as DeleteIcon,
} from "@mui/icons-material";
import {
    red,
    lightGreen,
    blue,
    orange,
    cyan,
    teal,
    grey
} from "@mui/material/colors";


function TrialItem({ id, name, drawerCloseCallback }) {
    const [optionMenu, setOptionMenu] = useState(false);

    // TODO: anchorEl is set in redux state
    const [anchorEl, setAnchorEl] = useState(null);
    const statusCode = id;

    const handlePopoverTouchTap = (event) => {
        // prevents ghost clicks
        event.preventDefault();
        setOptionMenu(true);
        setAnchorEl(event.currentTarget); 
    }

    const handlePopoverRequestClose = () => {
        setOptionMenu(false);
    }

    const getAvatarIcon = (statusCode) => {
        let icon;
        let color;
        switch (statusCode) {
            case 0:
                icon = <PassIcon />;
                color = lightGreen['A700']
                break;
            case 1:
                icon = <FailIcon />;
                color = red[500]
                break;
            case 2:
                icon = <TimeoutIcon />;
                color = red[500]
                break;
            default:
                icon = <HasNotRunIcon />;
                color = grey[500]
                break;
        }
        return (
            <Avatar sx={{ bgcolor: color }}>
                {icon}
            </Avatar>
        );
    }

    // TODO: goal for avatar element is to have this
    // https://mui.com/material-ui/react-progress/#interactive-integration

    return (
        <ListItem
            secondaryAction={
                <>
                    <IconButton onClick={handlePopoverTouchTap}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        open={optionMenu}
                        onClose={handlePopoverRequestClose}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                    >
                        <MenuItem onClick={
                            () => {
                                drawerCloseCallback();
                                console.log("Run test");
                            }
                        }>
                            <ListItemIcon>
                                <RunIcon sx={{ color: blue[600] }}/>
                            </ListItemIcon>
                            <ListItemText>
                                Run
                            </ListItemText>
                        </MenuItem>
                        <MenuItem onClick={
                            () => {
                                drawerCloseCallback();
                                console.log("Edit test");
                            }
                        }>
                            <ListItemIcon>
                                <EditIcon sx={{ color: orange[500] }} />
                            </ListItemIcon>
                            <ListItemText>
                                Edit
                            </ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={
                            () => {
                                drawerCloseCallback();
                                console.log("Upload test");
                            }
                        }>
                            <ListItemIcon>
                                <UploadIcon sx={{ color: cyan[400] }} />
                            </ListItemIcon>
                            <ListItemText>
                                Upload
                            </ListItemText>
                        </MenuItem>
                        <MenuItem onClick={
                            () => {
                                drawerCloseCallback();
                                console.log("Download test");
                            }
                        }>
                            <ListItemIcon>
                                <DownloadIcon sx={{ color: teal[300] }} />
                            </ListItemIcon>
                            <ListItemText>
                                Download
                            </ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={
                            () => {
                                drawerCloseCallback();
                                console.log("Delete test");
                            }
                        }>
                            <ListItemIcon>
                                <DeleteIcon sx={{ color: red[900] }}/>
                            </ListItemIcon>
                            <ListItemText>
                                Delete
                            </ListItemText>
                        </MenuItem>
                    </Menu>
                </>
            }
        >
            <ListItemAvatar>
                {getAvatarIcon(statusCode)}
            </ListItemAvatar>
            <ListItemText 
                primary={name} 
                secondary={"status code"}
            />
        </ListItem>
    );
}

export default TrialItem;