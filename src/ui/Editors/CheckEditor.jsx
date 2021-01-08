import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckEditor ({settings, onChange, value, isEdit}) {
    const handleChange = (event) => {
        onChange(event.target.checked, settings.data);
    };

    return (
        <FormControlLabel
            control={(
                <Checkbox
                    checked={value}
                    color="primary"
                    onChange={handleChange}
                    disabled={settings.readOnly || !isEdit}
                />
            )}
            label={settings.title}
        />
    );
}
