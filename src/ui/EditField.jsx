import React from 'react';
import { Grid } from '@material-ui/core';

import CheckEditor from './Editors/CheckEditor';
import NumberEditor from './Editors/NumberEditor';
import SelectEditor from './Editors/SelectEditor';
import TextEditor from './Editors/TextEditor';
import DocumentEditor from './Editors/DocumentEditor';

export default class EditField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            settings: props.settings,
            item: props.item,
            onChange: props.onChange,
        };

        this.handleChangeField = this.handleChangeField.bind(this);
    }

    render() {
        return (
            <Grid xs={12}>
                {this.renderFieldEditor()}
            </Grid>
        );
    }

    renderFieldEditor() {
        const {settings} = this.state;
        const {isEdit, item} = this.props;

        const editors = {
            checkbox: CheckEditor,
            numeric: NumberEditor,
            select: SelectEditor,
            text: TextEditor,
            document: DocumentEditor,
        };

        let type = settings.type || settings.editor || 'text';

        const CurrentEditor = editors[type];

        return (
            <CurrentEditor
                settings={settings}
                onChange={this.handleChangeField}
                key={settings.data}
                value={item[settings.data]}
                isEdit={isEdit}
            />
        );
    }

    handleChangeField(newValue, key) {
        let {item} = this.props;
        item[key] = newValue;

        this.state.onChange(key, newValue);
        this.forceUpdate();
    }
}