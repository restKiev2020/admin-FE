import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import EditField from '../../../ui/EditField';
import {allSettings} from '../model/advertTableLinesSettings';
import advertService from '../service/advertService';
import {UserHeaderCart} from '../../user/component/UserHeaderCart';
import userService from '../../user/service/userService';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import GoBackButton from '../../../ui/GoBackButton';

export default class AdvertCart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            advert: null,
            tempAdvert: null,
            user: null,
            isEdit: false,
        };

        this.removeItem = this.removeItem.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.resetEdit = this.resetEdit.bind(this);

        window.title = 'Обьект';
    }

    handleFieldChange(key, value) {
        this.state.advert[key] = value;
    }

    async componentDidMount() {
        const advert = await advertService.getFlatAdvertById(this.props.advertId);
        this.setState({
            advert: advert,
            tempAdvert: {...advert},
            user: await userService.getUserById(advert.user_id),
        });

        window.title = 'Обьект ' + advert.id;
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

    async handleSave() {
        const {advert} = this.state;
        await advertService.updateFlatAdvert(advert);

        this.setState({
            tempAdvert: {...advert},
            isEdit: false,
        })
    }

    resetEdit() {
        this.setState({
            advert: {...this.state.tempAdvert},
            isEdit: false,
        })
    }

    async removeItem() {
        const {advert} = this.state;
        await advertService.removeAvert(advert);

        this.setState({
            isEdit: false,
        });

        this.props.history.goBack();
    }

    renderButtons() {
        const {isEdit} = this.state;

        return (
            <div className={'low__padding'}>

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
                {!isEdit && ( (
                    <Button
                        variant="contained"
                        style={{'margin-right': '10px'}}
                        size="small"
                        color="secondary"
                        onClick={this.removeItem}
                    >
                        Удалить
                    </Button>
                ))}
                <GoBackButton/>
            </div>
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
