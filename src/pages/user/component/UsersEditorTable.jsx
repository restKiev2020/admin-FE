import React from 'react';
import {HotColumn, HotTable} from '@handsontable/react';

import tableSettings from '../model/userTableLinesSettings';
import {useHistory} from 'react-router';

export default function UsersEditorTable({users, onChange}) {
    let history = useHistory();

    const handleClickLine = (index, y) => {
        if (index < 0 || y < 0) return;
        const id = users[index].id;
        history.push(`/user/${id}`)
    }

    const renderUserFields = () => {
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
        <div style={{
            overflow: 'auto',
            height: '400px',
        }}>
            <HotTable
                settings={{
                    data: users,
                    licenseKey: 'non-commercial-and-evaluation',
                    columnSorting: true,
                    contextMenu: true,
                    manualColumnMove: true,
                    manualRowMove: true,
                    filters: true,
                    dropdownMenu: true,
                    rowHeaders: true,
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
                {renderUserFields()}
            </HotTable>

            <button onClick={() => {
                tableSettings.dropSortedSettings();
                window.location.reload();
            }}>Показать скрытые колонки</button>
        </div>
    );
}
