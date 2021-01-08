import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function NumberEditor ({settings, onChange, value, isEdit}) {
    const handleChange = (event) => {
        onChange(event.target.value, settings.data)
    }
    return (
        <TextField
            label={settings.title}
            type="number"
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            value={value}
            onChange={handleChange}
            disabled={settings.readOnly || !isEdit}
        />
    );
}
