import React from 'react';
import {NavLink} from "react-router-dom";

export default function AdvertIdRenderer ({value}) {
    return (
        <div>
            <span
                style={{
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    color: '#00f',
                }}
            >
                <NavLink to={`/advert/${value}`}>
                    {value}
                </NavLink>
            </span>
        </div>
    );
}
