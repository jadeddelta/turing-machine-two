import { List, Divider, Drawer, Typography, Button, MenuList, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { 
    PlayCircleFilled as RunIcon,
    AddCircle as AddIcon,
    UploadFile as UploadIcon,
    Download as DownloadIcon,
    DeleteSweep as DeleteIcon
} from "@mui/icons-material";
import { blue, pink, orange, teal, grey } from '@mui/material/colors';
import TrialItem from "./TrialItem";
import { cyan } from "@mui/material/colors";

function TestDrawer({ open, handleClose }) {
    // TODO: redux state
    const tests = ["walter", "bingus", "plimpus", "gakster"]
    const isRunningTrial = false;

    return (
        <Drawer
            open={open}
            anchor="left"
            onClose={handleClose}
        >
            <Typography variant="h4" sx={{ pl: "12px", py: "6px", color: cyan[400] }}>
                Tests
            </Typography>
            <Divider />
            <List sx={{ height: '60%' }}>
                {tests.map((test, index) => (
                    <TrialItem id={index} name={test} drawerCloseCallback={handleClose} />
                ))}
            </List>
            <MenuList>
                <Divider />
                <MenuItem onClick={console.log("runAllTests")}>
                    <ListItemIcon>
                        <RunIcon sx={{ color: blue[600] }}/>
                    </ListItemIcon>
                    <ListItemText>
                        Run Test
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={console.log("handleAddTest")}>
                    <ListItemIcon>
                        <AddIcon sx={{ color: pink[500] }}/>
                    </ListItemIcon>
                    <ListItemText>
                        Add Test
                    </ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={console.log("uploadTests")}>
                    <ListItemIcon>
                        <UploadIcon sx={{ color: orange[500]}}/>
                    </ListItemIcon>
                    <ListItemText>
                        Upload Tests 
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={console.log("downloadAllTests")}>
                    <ListItemIcon>
                        <DownloadIcon sx={{ color: teal[300] }}/>
                    </ListItemIcon>
                    <ListItemText>
                        Download Tests
                    </ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={console.log("handleDeleteTests")}>
                    <ListItemIcon>
                        <DeleteIcon sx={{ color: grey[500] }} />
                    </ListItemIcon>
                    <ListItemText>
                        Delete All Tests
                    </ListItemText>
                </MenuItem>
            </MenuList>
        </Drawer>
    );
}

export default TestDrawer;