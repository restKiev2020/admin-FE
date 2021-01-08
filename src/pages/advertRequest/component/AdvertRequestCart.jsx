import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';

import advertRequestService from '../service/advertRequestService';
import {allSettings} from "../model/advertRequestFieldSettings";
import EditField from '../../../ui/EditField';
import userService from '../../user/service/userService';
import {UserHeaderCart} from '../../user/component/UserHeaderCart';
import advertService from '../../advert/service/advertService';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import GoBackButton from '../../../ui/GoBackButton';

export default class AdvertRequestCart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            advert: null,
            tempAdvert: null,
            user: null,
            isEdit: false,
        }

        this.handleSave = this.handleSave.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);

        window.title = 'Запрос';
    }

    async handleSave() {
        const {advert} = this.state;
        await advertService.updateFlatAdvert(advert);

        this.setState({
            tempAdvert: {...advert},
            isEdit: false,
        })
    }

    renderButtons() {
        const {isEdit} = this.state;

        return (
            <div className={'low__padding'}>
                {isEdit && ( <Button
                    style={{'margin-right': '10px'}}
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={this.handleSave}
                >
                    Сохранить
                </Button>)}

                {isEdit && ( <Button
                    style={{'margin-right': '10px'}}
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={this.resetEdit}
                >
                    Сброс
                </Button>)}

                {!isEdit && ( (
                    <Button
                        style={{'margin-right': '10px'}}
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => this.setState({isEdit: true})}
                    >
                        Редактировать
                    </Button>
                ))}
                <GoBackButton/>
            </div>
        );
    }

    resetEdit() {
        this.setState({
            advert: {...this.state.tempAdvert},
            isEdit: false,
        })
    }

    handleFieldChange(key, value) {
        this.state.advert[key] = value;
    }

    async componentDidMount() {
        const advert = await advertRequestService.getFlatAdvertRequestById(this.props.advertId);
        this.setState({
            advert: advert,
            tempAdvert: {...advert},
            user: await userService.getUserById(advert.user_id),
        });

        window.title = 'Запрос ' + advert.id;
    }

    renderField(item) {
        const {isEdit} = this.state;
        return (
            <EditField
                settings={item}
                item={this.state.advert}
                onChange={this.handleFieldChange}
                isEdit={isEdit}
            />
        );
    }

    render() {
        const {advert, user} = this.state;

        if (!advert) {
            return <h3>Load...</h3>;
        }

        return (
            <Paper>
                <Grid container>
                    <Grid item xs={12}>
                        <UserHeaderCart
                            user={user}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderButtons()}
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <div className="grid__container">
                                    {allSettings.map((settings) => {
                                        return this.renderField(settings);
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}
