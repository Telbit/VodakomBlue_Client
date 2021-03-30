import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import { CreatePackageLayout } from './components/Layout/CreatePackageLayout';

export const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Typography>HelloWorld!</Typography>
                </Route>
                <Route path="/create" component={CreatePackageLayout} />
            </Switch>
        </div>
    );
}
