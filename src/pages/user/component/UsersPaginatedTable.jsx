import React from 'react';
import Pagination from "@material-ui/lab/Pagination";

import userService from '../service/userService';
import TableMethod from '../../../model/TableMethod';
import UsersEditorTable from "./UsersEditorTable";

export default class UsersPaginatedTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersList: [],
            pageCount: 1,
            page: 1,
        }

        this.handleChangeLine = this.handleChangeLine.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);

        document.title = 'Пользователи';
    }

    async componentDidMount() {
        this.setState({
            usersList: await userService.getUsersList(),
        });
    }

    async handleChangeLine(data, method) {
        if (method !== TableMethod.edit) {
            return;
        }
        const {usersList} = this.state;
        await userService.updateUser(usersList[data[0][0]]);
    }

    async handlePageClick(event, value) {
        const paginator = await userService.getUsersList(value);
        this.setState({
            advertList: paginator.data,
            page: value,
        });
    }

    render() {
        const {usersList, pageCount, page} = this.state;

        if (!usersList) {
            return <h3>Load</h3>;
        }

        return (
            <div>
                <h3>Пользователи</h3>
                <Pagination
                    count={pageCount}
                    onChange={this.handlePageClick}
                    page={page}
                />
                <UsersEditorTable
                    users={usersList}
                    onChange={this.handleChangeLine}
                />
            </div>
        );
    }
}
