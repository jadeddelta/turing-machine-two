import React, { useState } from "react";

import { Avatar, Box, IconButton } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import SwitchDirectionField from "./SwitchDirectionField";
import AutocompleteField from "./AutocompleteField";
import { blue } from "@mui/material/colors";

function RowItem({ rowNum, index, id, isHighlighted }) {
    const fieldTypes = ["Current State", "Read", "Write", "Direction", "New State"];

    return (
        <div>
            <Box display="flex" gap={2} justifyContent={"space-between"} alignItems={"center"}>
                <Avatar sx={{ bgcolor: blue[500], width: 32, height: 32 }}>
                    {index + 1}
                </Avatar>
                <AutocompleteField 
                    fieldType={fieldTypes[0]}
                />       
                <AutocompleteField 
                    fieldType={fieldTypes[1]}
                />
                <AutocompleteField 
                    fieldType={fieldTypes[2]}
                />
                <SwitchDirectionField 
                    fieldType={fieldTypes[3]}
                />
                <AutocompleteField 
                    fieldType={fieldTypes[4]}
                />
                <IconButton
                    onClick={console.log("deleteRow")}
                    id={id}
                >
                    <DeleteForever />
                </IconButton>
            </Box>
        </div>
    );
}

export default RowItem;