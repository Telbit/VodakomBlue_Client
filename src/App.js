import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import { EditLayout } from './components/Layout/EditLayout';
import { PackageNavMenu } from './components/NavMenu/PackageNavMenu';
import { FormProvider } from './FormContext';
import AddEmployee from './components/HRModule/Recruit/AddEmployee';
import HRNavMenu from './components/NavMenu/HRNavMenu';

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
                <Route path="/hr">
                    <EditLayout navarea={<HRNavMenu/>} workarea={<AddEmployee/>}/>
                </Route>
            </Switch>
        </div>
    );
}
