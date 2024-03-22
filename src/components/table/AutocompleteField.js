import { Autocomplete, TextField } from "@mui/material";

function AutocompleteField({ fieldType }) {
    return (
        <Autocomplete
            freeSolo 
            disableClearable
            options={[]}
            sx={{ maxWidth: '200px', mx: '12px', flexGrow: 1 }}
            renderInput={(params) => (
                <TextField 
                    {...params}
                    label={fieldType}
                    margin="normal" 
                    variant="standard"
                    InputProps={{ ...params.InputProps, type: 'search', bgcolor: '#fff', my: '8px' }}
                />
            )}
        />
    );
}

export default AutocompleteField;