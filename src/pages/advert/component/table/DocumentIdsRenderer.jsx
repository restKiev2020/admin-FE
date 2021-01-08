import React from 'react';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {HotColumn, HotTable} from '@handsontable/react';
import Paper from '@material-ui/core/Paper';

import ImageRenderer from './ImageRenderer';
import TableMethod from '../../../../model/TableMethod';
import client from '../../../../http/client';

export default class DocumentIdsRenderer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value && props.value.map((item) => {
                item.is_nudity = !!item.is_nudity;
                return item;
            }),
            anchorEl: null,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleClickAway = this.handleClickAway.bind(this);
        this.handleChangeLine = this.handleChangeLine.bind(this);
    }

    async handleChangeLine(data, method) {
        if (method !== TableMethod.edit) {
            return;
        }

        const {usersList} = this.state;
        const item = usersList[data[0][0]]

        await client.put(` /api/documents/${item.id}`, {
            document: item,
        });
    }

    handleClick(event) {
        const {anchorEl} = this.state;

        this.setState({
            anchorEl: anchorEl ? null : event.currentTarget,
        });
    }

    handleClickAway() {
        this.setState({
            anchorEl: null,
        })
    }

    render() {
        const {value, anchorEl} = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        return (
            <div>
                <span style={{
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    color: '#00f',
                }} onClick={this.handleClick}>
                    N
                </span>

                <ClickAwayListener onClickAway={this.handleClickAway}>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                        <Paper>
                            <HotTable
                                settings={{
                                    data: value,
                                    licenseKey: 'non-commercial-and-evaluation',
                                    rowHeights: 55,
                                }}
                                afterChange={this.handleChangeLine}
                            >
                                <HotColumn
                                    settings={{
                                        title: 'url',
                                        data: 'url',
                                        readOnly: true,
                                    }}
                                >
                                    <ImageRenderer hot-renderer/>
                                </HotColumn>
                                <HotColumn
                                    settings={{
                                        title: 'is_nudity',
                                        data: 'is_nudity',
                                        type: 'checkbox',
                                    }}
                                />
                            </HotTable>
                        </Paper>
                    </Popper>
                </ClickAwayListener>
            </div>
        );
    }
}
