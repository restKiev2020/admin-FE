import React from 'react';
import { HotColumn, HotTable } from '@handsontable/react';
import tableSettings from '../model/advertTableLinesSettings';
import {useHistory} from 'react-router';

export default function AdvertEditorTable ({ adverts, onChange }) {
    let history = useHistory();

    const handleClickLine = (index, y) => {
        if (index < 0 || y < 0) return;
        const id = adverts[index].id;
        history.push(`/advert/${id}`)
    }

    const renderAdvertFields = () => {
        return tableSettings.getSortedSettings().map((item) => {
            if (item.data == 'documents_ids') return ;
            const { renderer } = item;
            const ItemRenderer = renderer
            return (
                <HotColumn
                    key={item.data}
                    {...item}
                >
                    {ItemRenderer && <ItemRenderer hot-renderer/>}
                </HotColumn>
            );
        });
    };

    return (
            <HotTable
                settings={{
                    data: adverts,
                    licenseKey: 'non-commercial-and-evaluation',
                    columnSorting: false,
                    contextMenu: false,
                    manualColumnMove: true,
                    manualRowMove: true,
                    filters: true,
                    dropdownMenu: false,
                    rowHeaders: true,
                    rowHeights: 55,
                    readOnly: true,
                    manualColumnResize: true,
                    manualRowResize: true,
                    hiddenColumns: {
                        indicators: true
                    },
                    height: '70vh',
                    selectionMode: 'single',

                    beforeHideColumns: (a, b) => {
                        tableSettings.hideColl(a, b);
                    },
                    afterColumnMove: (a, b)=> {
                        tableSettings.moveColl(a, b)
                    },
                }}
                afterGetColHeader={(a, b)=> {
                    console.log('click')
                }}
                modifyColWidth={(width, col) => {
                    if(width > 250){
                        return 250
                    }
                }}
            >
                {renderAdvertFields()}
            </HotTable>
    );
}
