import React, {useState} from 'react';
import Popper from '@material-ui/core/Popper';
import {HotColumn, HotTable} from '@handsontable/react';

import ImageRenderer from '../../pages/advert/component/table/ImageRenderer';

export default function DocumentEditor ({settings, onChange, value, isEdit}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleChangeLine = () => {
        onChange(value, settings.data);
    }

    return (
        <div>
            <button
                aria-describedby={id}
                type="button"
                onClick={handleClick}
                disabled={settings.readOnly || !isEdit}
            >
                Картинки
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <HotTable
                    settings={{
                        data: value,
                        licenseKey: 'non-commercial-and-evaluation',
                        rowHeights: 55,
                    }}
                    afterChange={handleChangeLine}
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
            </Popper>
        </div>
    );
}
