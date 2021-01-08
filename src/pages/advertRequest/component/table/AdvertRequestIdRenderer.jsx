import React from 'react';
import {NavLink} from "react-router-dom";

export default function AdvertRequestIdRenderer ({value}) {
    return (
        <div>
            <span
                style={{
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    color: '#00f',
                }}
            >
                <NavLink to={`/advert-request/${value}`}>
                    {value}
                </NavLink>
            </span>
        </div>
    );
}
