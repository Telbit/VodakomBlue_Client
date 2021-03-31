import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import { EditLayout } from './components/Layout/EditLayout';
import { PackageNavMenu } from './components/NavMenu/PackageNavMenu';

export const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Typography>HelloWorld!</Typography>
                </Route>
                <Route path="/packages">
                    <EditLayout navarea={<PackageNavMenu />} />
                </Route>
            </Switch>
        </div>
    );
}
