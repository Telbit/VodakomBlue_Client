import React from 'react';
import { Route, Switch } from 'react-router';
import {Button} from '@material-ui/core';

export const App = () => {
    return (
        <Switch>
            <Route path={'/'}>
                Hello World!
            </Route>
        </Switch>
    );
}
