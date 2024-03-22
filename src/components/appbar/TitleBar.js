import { Box, Typography } from "@mui/material";


function TitleBar() {
    return (
        <Box bgcolor="primary.main" sx={{ width: '100%', height: 50 }}>
            <Typography variant="h4" color="primary.contrastText" sx={{ paddingTop: '8px', paddingLeft: '10px' }}>
                Turing Machine Website
            </Typography>
        </Box>
    );
}

export default TitleBar;