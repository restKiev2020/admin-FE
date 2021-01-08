import React from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";

import BaseLayout from "./BaseLayout";
import Urls from "../../model/Urls";
import AuthService from "../../auth/AuthService";

export default function BaseLayoutRouter ({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (AuthService.isAuthenticated) {
                return <BaseLayout>
                    <Component {...props} />
                </BaseLayout>
            }
            return <Redirect to={
                {
                    pathname: Urls.LOGIN_PAGE_URL,
                    state: {
                        from: props.location
                    }
                }
            }/>
        }} />
    )
}
