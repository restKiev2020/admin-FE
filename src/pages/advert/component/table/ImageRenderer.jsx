import React from 'react';
import Avatar from '@material-ui/core/Avatar';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
    const {value} = props

    return (
        <Avatar variant="square" src={value}>
            N
        </Avatar>
    );
}