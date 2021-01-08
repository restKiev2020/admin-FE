import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function TextEditor ({settings, onChange, value, isEdit}) {
    const handleChange = (event) => {
        onChange(event.target.value, settings.data)
    }
    return (
        <TextField
            name={settings.title}
            label={settings.title}
            disabled={settings.readOnly || !isEdit}
            fullWidth
            value={value}
            onChange={handleChange}
            InputLabelProps={{
                shrink: true,
            }}
        />
    );
}
