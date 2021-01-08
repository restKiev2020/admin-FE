import React from 'react';
import {useParams} from 'react-router';
import AdvertRequestCart from './component/AdvertRequestCart';

export default function AdvertRequestPage() {
    let { id } = useParams();
    return (
        <AdvertRequestCart
            advertId={id}
        />
    );
}