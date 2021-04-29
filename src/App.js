import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Button, Grid, Typography, makeStyles } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import { EditLayout } from './components/Layout/EditLayout';
import { PackageNavMenu, HRNavMenu } from './components/NavMenu/PackageNavMenu';
import { FormProvider } from './FormContext';
import ListEmployees from './components/HRModule/Employees/ListEmployees';
import { hrNavMenu } from './objects/HrNavMenuObj';
import { packageNavMenu } from './objects/PackageNavMenuObject';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.bgColor.secondary
    }
}))

export const App = () => {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Typography>HelloWorld!</Typography>
                </Route>
                <Route path="/packages">
                    <FormProvider>
                        <EditLayout navarea={<PackageNavMenu navObj={packageNavMenu} />} />
                    </FormProvider>
                </Route>
                <Route path="/hr">
                    <FormProvider>
                        <EditLayout navarea={<PackageNavMenu navObj={hrNavMenu} />} />
                    </FormProvider>
                </Route>
                <Route path="/hr/employees">
                    <ListEmployees />
                </Route>
            </Switch>
        </div>
    );
}
