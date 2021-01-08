import React from 'react';

export default function sliceTextRenderer({value}) {
    return <div>
        {value ? ('' + value).slice(0, 25) : ''}
    </div>
};