import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import userService from '../service/userService';
import AdvertEditorTable from '../../advert/component/AdvertEditorTable';
import AdvertRequestEditorTable from '../../advertRequest/component/AdvertRequestEditorTable';
import TableMethod from '../../../model/TableMethod';
import advertService from '../../advert/service/advertService';
import advertRequestService from '../../advertRequest/service/advertRequestService';
import userTableLinesSettings from '../model/userTableLinesSettings';
import EditField from '../../../ui/EditField';

export function UserHeaderCart ({user}) {
    return (
        <Grid container className={'low__padding'}>
            <Grid item xs={1}>
                <Avatar
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    border={1}
                    alt={user.last_name}
                    src={user?.avatar?.url}
                />
            </Grid>
            <Grid item xs={11} className={'mg__0'}>
                <h3>id: {user.id} | {user.last_name} {user.first_name}</h3>
                <p>{user.email}</p>
                <p>{user.phone_number}</p>
            </Grid>
        </Grid>
    );
}
