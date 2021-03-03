import React from 'react';
import {useParams} from 'react-router';
import AdvertRequestCart from './component/AdvertRequestCart';
import {useHistory} from 'react-router';

export default function AdvertRequestPage() {
    let history = useHistory();
    let { id } = useParams();
    return (
        <AdvertRequestCart
            advertId={id}
            history={history}
        />
    );
}
