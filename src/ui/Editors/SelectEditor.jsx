import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default function SelectEditor ({settings, onChange, value, isEdit}) {
    const {title, selectOptions} = settings
    function handleChange(event) {
        onChange(event.target.value, settings.data)
    }
    return (
        <FormControl fullWidth disabled={settings.readOnly || !isEdit}>
            <InputLabel shrink>{title}</InputLabel>
            <Select
                onChange={handleChange}
                value={value}
                native

            >
                <option aria-label="None" value={null} />

                {selectOptions.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </Select>
        </FormControl>
    );
}
