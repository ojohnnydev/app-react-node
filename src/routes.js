import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated  } from './services/auth';

import Cadastrar from './pages/cadastrar';
import Login from './pages/login';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Cadastrar} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/inicio" component={() => <h1>Início</h1>} />
            {/*<PrivateRoute path="/app" component={() => <h1>App</h1>} />*/}
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
