import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login/LoginPage';
import BaseLayoutRouter from './pages/layout/BaseLayoutRouter';
import UserPage from './pages/user/UserPage';
import AdvertPage from './pages/advert/AdvertPage';
import AuthService from './auth/AuthService';
import Urls from './model/Urls';
import Spinner from './ui/Spinner';
import UserListPage from './pages/user/UserListPage';
import AdvertRequestListPage from './pages/advertRequest/AdvertRequestListPage';
import AdvertListPage from "./pages/advert/AdvertListPage";
import AdvertRequestPage from './pages/advertRequest/AdvertRequestPage';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        };
    }

    async componentDidMount() {
        await AuthService.mount();
        this.setState({
            isLoaded: true,
        });
    }

    render() {
        const { isLoaded } = this.state;

        if (!isLoaded) {
            return <Spinner />;
        }

        return (
            <div>
                <Router>
                    <Switch>
                        <BaseLayoutRouter
                            exact
                            path={Urls.HOME_PAGE_URL}
                            component={() => <h1>REST Admin Panel</h1>}
                        />
                        <Route
                            path={Urls.LOGIN_PAGE_URL}
                            component={LoginPage}
                        />
                        <BaseLayoutRouter
                            path={Urls.USER_LIST_PAGE_URL}
                            component={UserListPage}
                        />
                        <BaseLayoutRouter
                            path={Urls.ADVERT_PAGE_URL}
                            component={AdvertListPage}
                        />
                        <BaseLayoutRouter
                            path={Urls.ADVERT_REQUEST_PAGE_URL}
                            component={AdvertRequestListPage}
                        />

                        <BaseLayoutRouter
                            path={'/user/:id'}
                            component={UserPage}
                        />
                        <BaseLayoutRouter
                            path={'/advert/:id'}
                            component={AdvertPage}
                        />
                        <BaseLayoutRouter
                            path={'/advert-request/:id'}
                            component={AdvertRequestPage}
                        />

                    </Switch>
                </Router>
            </div>
        );
    }
}
