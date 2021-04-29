import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Button, Grid, Typography, makeStyles } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import { EditLayout } from './components/Layout/EditLayout';
import { PackageNavMenu } from './components/NavMenu/PackageNavMenu';
import { FormProvider } from './FormContext';
import AddEmployee from './components/HRModule/Recruit/AddEmployee';
import HRNavMenu from './components/NavMenu/HRNavMenu';

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
