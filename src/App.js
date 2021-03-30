import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {Button, Typography} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';

export const App = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <Typography>HelloWorld!</Typography>
                </Route>
            </Switch>
        </div>
    );
}
