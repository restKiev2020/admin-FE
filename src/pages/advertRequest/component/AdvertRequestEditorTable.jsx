import React from 'react';
import { HotColumn, HotTable } from '@handsontable/react';
import tableSettings from '../model/advertRequestFieldSettings';
import {useHistory} from 'react-router';

export default function AdvertRequestEditorTable({ advertRequests, onChange }) {
    let history = useHistory();

    const handleClickLine = (index, y) => {
        if (index < 0 || y < 0) return;
        const id = advertRequests[index].id;
        history.push(`/advert-request/${id}`)
    }

    const renderAdvertRequestFields = () => {
        return tableSettings.getSortedSettings().map((item) => {
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
        <div
            style={{
                overflowY: 'auto',
                overflowX: 'auto',
                height: '500px',
            }}
        >
            <HotTable
                settings={{
                    data: advertRequests,
                    licenseKey: 'non-commercial-and-evaluation',
                    columnSorting: true,
                    contextMenu: true,
                    manualColumnMove: true,
                    manualRowMove: true,
                    filters: true,
                    dropdownMenu: true,
                    rowHeaders: true,
                    rowHeights: 55,
                    readOnly: true,
                    manualColumnResize: true,
                    manualRowResize: true,
                    hiddenColumns: {
                        indicators: true
                    },
                    beforeHideColumns: (a, b) => {
                        tableSettings.hideColl(a, b);
                    },
                    afterColumnMove: (a, b)=> {
                        tableSettings.moveColl(a, b)
                    }
                }}
                afterChange={onChange}
                afterSelection={handleClickLine}
            >
                {renderAdvertRequestFields()}
            </HotTable>

            <button onClick={() => {
                tableSettings.dropSortedSettings();
                window.location.reload();
            }}>Показать скрытые колонки</button>
        </div>
    );
}
