import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

import advertService from '../service/advertService';
import AdvertEditorTable from './AdvertEditorTable';
import TableMethod from '../../../model/TableMethod';
import CustomTable from './CustomTable';

export default class AdvertPaginatedTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            advertList: [],
            pageCount: 1,
            page: 1,
        };

        this.handleChangeLine = this.handleChangeLine.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);

        document.title = 'Обьекты';
    }

    async componentDidMount() {
        const paginator = await advertService.getAdvertList();
        this.setState({
            advertList: advertService.flatAdvertList(paginator.data),
            pageCount: paginator.last_page,
        });
    }

    async handleChangeLine(data, method) {
        if (method !== TableMethod.edit) {
            return;
        }
        const {advertList} = this.state;
        await advertService.updateFlatAdvert(advertList[data[0][0]]);
    }

    async handlePageClick(event, value) {
        const paginator = await advertService.getAdvertList(value);
        this.setState({
            advertList: advertService.flatAdvertList(paginator.data),
            page: value,
        });
    }

    render() {
        const { advertList, pageCount, page } = this.state;

        if (!advertList) {
            return <h3>Load</h3>;
        }

        return (
            <div>
                <h3>Обьекты</h3>
                <Pagination
                    count={pageCount}
                    onChange={this.handlePageClick}
                    page={page}
                />
                {/*<AdvertEditorTable*/}
                {/*    adverts={advertList}*/}
                {/*    onChange={this.handleChangeLine}*/}
                {/*/>*/}

                <CustomTable adverts={advertList} />
            </div>
        );
    }
}
