import { Paper, Button, Box } from "@mui/material";
import React, { useState } from "react";
import { cyan } from "@mui/material/colors";
import RowItem from "./RowItem";

function DynamicRuleTable({  }) {
    const [rowHighlighted, setRowHighlighted] = useState(false);

    const onFocus = () => {
        setRowHighlighted(true);
    }
    const onBlur = () => {
        setRowHighlighted(false);
    }
    // TODO: redux
    const rowsById = ["walter", "bingus", "plimpus", "gakster"]

    const styles = {
        tableContainer: {
            width: '90%',
            margin: '0 auto',
            height: 'auto',
            my: '10px'
        }
    }

    return (
        <Paper
            elevation={3}
            sx={styles.tableContainer}
        >
            <Box sx={{ width: '90%', margin: '0 auto', pt: rowsById.length > 0 ? '20px' : 0 }}>
                {rowsById.map((row, index) => (
                    <RowItem
                        index={index}
                    />
                ))}
            </Box>
            <Button 
                variant="contained"
                color="primary"
                onClick={console.log("addRow")}
                style={{ backgroundColor: cyan[400] }}
                sx={{ m: '20px' }}
            >
                Add Rule
            </Button>
        </Paper>
    );
}

export default DynamicRuleTable;