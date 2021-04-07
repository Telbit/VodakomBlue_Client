import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/navbar/Navbar';
import { EditLayout } from './components/layout/EditLayout';
import { PackageNavMenu } from './components/navMenu/PackageNavMenu';
import { FormProvider } from './FormContext';

export const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Typography>HelloWorld!</Typography>
                </Route>
                <Route path="/packages">
                    <FormProvider>
                        <EditLayout navarea={<PackageNavMenu />} />
                    </FormProvider>
                </Route>
            </Switch>
        </div>
    );
}
