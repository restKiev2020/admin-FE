import React from "react";
import {useParams} from 'react-router';
import UserCart from './component/UserCart';

export default function UserPage() {
    let { id } = useParams();
    return (
        <UserCart
            userId={id}
        />
    );
}