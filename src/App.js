import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import { EditLayout } from './components/Layout/EditLayout';
import { PackageNavMenu, HRNavMenu } from './components/NavMenu/PackageNavMenu';
import { FormProvider } from './FormContext';
import ListEmployees from './components/HRModule/Employees/ListEmployees';
import EmployeeDetails from './components/HRModule/Employees/EmployeeDetails';

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
                    <FormProvider>
                        <EditLayout navarea={<PackageNavMenu/>} />
                    </FormProvider>
                </Route>
                <Route path="/employee">
                    <EmployeeDetails/>
                </Route>
            </Switch>
        </div>
    );
}
