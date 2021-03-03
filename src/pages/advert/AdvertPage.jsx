import React from "react";
import {useParams} from 'react-router';
import AdvertCart from "./component/AdvertCart";
import {useHistory} from 'react-router';

export default function AdvertPage() {
    let { id } = useParams();
    let history = useHistory();

    return (
        <AdvertCart
            advertId={id}
            history={history}
        />
    );
}
