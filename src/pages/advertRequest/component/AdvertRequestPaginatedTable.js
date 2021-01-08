import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

import TableMethod from '../../../model/TableMethod';
import advertRequestService from '../service/advertRequestService';
import AdvertRequestEditorTable from './AdvertRequestEditorTable';

export default class AdvertRequestPaginatedTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            advertRequestList: [],
            pageCount: 1,
            page: 1,
        };

        this.handleChangeLine = this.handleChangeLine.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        document.title = 'Запросы';
    }

    async componentDidMount() {
        const paginator = await advertRequestService.getAdvertRequestList();
        this.setState({
            advertRequestList: advertRequestService.flatAdvertRequestList(paginator.data),
            pageCount: paginator.last_page,
        });
    }

    async handleChangeLine(data, method) {
        if (method !== TableMethod.edit) {
            return;
        }
        const {advertRequestList} = this.state;
        await advertRequestService.updateFlatAdvertRequest(advertRequestList[data[0][0]]);
    }

    async handlePageClick(event, value) {
        const paginator = await advertRequestService.getAdvertRequestList(value);
        this.setState({
            advertRequestList: advertRequestService.flat(paginator.data),
            page: value,
        });
    }

    render() {
        const { advertRequestList, pageCount, page } = this.state;

        if (!advertRequestList) {
            return <h3>Load</h3>;
        }

        return (
            <div>
                <h3>Запросы</h3>
                <Pagination
                    count={pageCount}
                    onChange={this.handlePageClick}
                    page={page}
                />
                <AdvertRequestEditorTable
                    advertRequests={advertRequestList}
                    onChange={this.handleChangeLine}
                />
            </div>
        );
    }
}
