import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

function GoBackButton({history}) {
    return (
        <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {history.goBack()}}
            style={{'margin-right': '10px'}}
        >
            Назад
        </Button>
    );
}

export default withRouter(GoBackButton);