import React from 'react';
import { HotColumn, HotTable } from '@handsontable/react';
import tableSettings from '../model/advertTableLinesSettings';
import {useHistory} from 'react-router';
import {makeStyles} from '@material-ui/core/styles';
import {green} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    rowContainer: {
        padding:'10px',
        border: 'solid 1px',
        'min-width': '100px',
        // 'height': '150px',
    },
    rowText: {
        hyphens: 'auto',

    }
}));

export default function CustomTable ({ adverts, onChange }) {
    const styleProps = { backgroundColor: 'black', color: 'white' };
    const classes = useStyles(styleProps);

    const renderTitles = (index, y) => {
        return tableSettings.getSortedSettings().map((item) => {
            if (item.data == 'documents_ids') return ;

            return (
                <div style={{padding:'10px', border: 'solid 1px', 'min-width': '100px', 'max-height': '150px'}} key={item.data}>
                    <span style={{hyphens: 'auto'}}>{item.title}</span>
                </div>
            );
        });

    };

    const renderNewRow = (itemAdvert) => {
        return tableSettings.getSortedSettings().map((itemSettings) => {

            let valueToRender = itemAdvert[itemSettings.data];

            if (itemSettings.data == 'documents_ids') return ;

            return (
                <div className={classes.rowContainer} key={itemAdvert.id}>
                    <p class="truncate-overflow">{valueToRender}</p>
                </div>
            );
        });
        // return adverts.map(function(item, i){
        //     return renderRow(item)
        // })
    };

    return (
        <div>
            <div style={{display:'flex'}}>{renderTitles()}</div>

            <div>
                {adverts.map((item) => {
                   return <div style={{display:'flex'}}> {renderNewRow(item)}</div>
                })}
            </div>
        </div>
    );
}
