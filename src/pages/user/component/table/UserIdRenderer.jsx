import React from 'react';
import {NavLink} from "react-router-dom";

export default function UserIdRenderer ({value}) {
    return (
        <div>
            <span
                style={{
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    color: '#00f',
                }}
            >
                <NavLink to={`/user/${value}`}>
                    {value}
                </NavLink>
            </span>
        </div>
    );
}
