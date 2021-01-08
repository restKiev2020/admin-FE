import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import userService from '../service/userService';
import AdvertEditorTable from '../../advert/component/AdvertEditorTable';
import AdvertRequestEditorTable from '../../advertRequest/component/AdvertRequestEditorTable';
import TableMethod from '../../../model/TableMethod';
import advertService from '../../advert/service/advertService';
import advertRequestService from '../../advertRequest/service/advertRequestService';
import {allSettings} from '../model/userTableLinesSettings';
import EditField from '../../../ui/EditField';
import {UserHeaderCart} from './UserHeaderCart';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import GoBackButton from '../../../ui/GoBackButton';


export default class UserCart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            tabId: '1',
            adverts: [],
            advertRequests: [],
            isEdit: false,
            tempUser: null,
        };

        this.handleChangeTab = this.handleChangeTab.bind(this);
        this.updateAdvertRequest = this.updateAdvertRequest.bind(this);
        this.updateAdvert = this.updateAdvert.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.resetEdit = this.resetEdit.bind(this);

        window.title = 'Пользователь';
    }

    async componentDidMount() {
        const user = await userService.getUserById(this.props.userId);
        this.setState({
            user: user,
            tempUser: {...user},
            adverts: await userService.getFlatUserAdverts(this.props.userId),
            advertRequests: await userService.getFlatUserAdvertRequests(this.props.userId),
        });

        window.title = 'Пользователь ' + user.id;
    }

    handleFieldChange(key, value) {
        this.state.user[key] = value;
    }

    handleChangeTab(event, newValue) {
        this.setState({
            tabId: newValue,
        });
    }

    resetPassword() {
        const {user} = this.state;
        userService.resetPassword(user.id);
    }

    async handleSave() {
        const {user} = this.state;
        await userService.updateUser(user);

        this.setState({
            tempUser: {...user},
            isEdit: false,
        })
    }

    resetEdit() {
        this.setState({
            user: {...this.state.tempUser},
            isEdit: false,
        })
    }

    renderButtons() {
        const {isEdit} = this.state;

        return (
            <div>
                {isEdit && ( <Button
                    variant="contained"
                    style={{'margin-right': '10px'}}
                    size="small"
                    color="primary"
                    onClick={this.handleSave}
                >
                    Сохранить
                </Button>)}

                {isEdit && ( <Button
                    variant="contained"
                    style={{'margin-right': '10px'}}
                    size="small"
                    color="primary"
                    onClick={this.resetEdit}
                >
                    Сброс
                </Button>)}

                {!isEdit && ( (
                    <Button
                        variant="contained"
                        style={{'margin-right': '10px'}}
                        size="small"
                        color="primary"
                        onClick={() => this.setState({isEdit: true})}
                    >
                        Редактировать
                    </Button>
                ))}

                <Button
                    variant="contained"
                    style={{'margin-right': '10px'}}
                    size="small"
                    color="secondary"
                    onClick={this.resetPassword}
                >
                    Сбросить пароль
                </Button>

                <GoBackButton/>
            </div>
        );
    }

    renderUserInformation() {
        return (
            <Grid container>
                <Grid item xs={5}>
                    {this.renderButtons()}
                </Grid>

                <Grid item xs={12}>
                    <div className="grid__container">
                        {allSettings.map((settings) => {
                            return this.renderField(settings);
                        })}
                    </div>
                </Grid>
            </Grid>
        );
    }

    renderField(item) {
        const {isEdit} = this.state;
        return (
            <EditField
                settings={item}
                item={this.state.user}
                onChange={this.handleFieldChange}
                isEdit={isEdit}
            />
        );
    }

    renderUserObjects() {
        const { adverts } = this.state;
        return (
            <Grid container>
                <Grid item xs={12}>
                    <AdvertEditorTable adverts={adverts} onChange={this.updateAdvert} />
                </Grid>
            </Grid>
        );
    }

    async updateAdvert(data, method) {
        if (method !== TableMethod.edit) {
            return;
        }
        const {adverts} = this.state;
        await advertService.updateFlatAdvert(adverts[data[0][0]]);
    }
    async updateAdvertRequest(data, method) {
        if (method !== TableMethod.edit) {
            return;
        }
        const {advertRequests} = this.state;
        await advertRequestService.updateFlatAdvertRequest(advertRequests[data[0][0]]);
    }

    renderUserAdvertRequests() {
        const { advertRequests } = this.state;
        return (
            <Grid container>
                <Grid item xs={12}>
                    <AdvertRequestEditorTable advertRequests={advertRequests} onChange={this.updateAdvertRequest} />
                </Grid>
            </Grid>
        );
    }

    render() {
        const { tabId, user } = this.state;

        if (!user) {
            return (
                <h3>Load</h3>
            );
        }

        return (
            <div>
                <UserHeaderCart
                    user={user}
                />
                <TabContext value={tabId}>
                    <AppBar position='static' color='default'>
                        <TabList
                            onChange={this.handleChangeTab}
                            aria-label='simple tabs example'
                        >
                            <Tab label='Данные' value='1' />
                            <Tab label='Обьекты' value='2' />
                            <Tab label='Запросы' value='3' />
                        </TabList>
                    </AppBar>
                    <Paper>
                        <TabPanel value='1'>
                            {this.renderUserInformation()}
                        </TabPanel>
                        <TabPanel value='2'>
                            {this.renderUserObjects()}
                        </TabPanel>
                        <TabPanel value='3'>
                            {this.renderUserAdvertRequests()}
                        </TabPanel>
                    </Paper>
                </TabContext>
            </div>
        );
    }
}
