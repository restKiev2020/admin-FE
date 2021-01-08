import React from "react";
import {useParams} from 'react-router';
import AdvertCart from "./component/AdvertCart";

export default function AdvertPage() {
    let { id } = useParams();
    return (
        <AdvertCart
            advertId={id}
        />
    );
}