import React, { useState } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root : {
        backgroundColor: theme.bgColor.main
    },
    title: {
        flexGrow: 1,
        textDecoration: "none",
        color: "inherit"
    },
    button: {
        color: "inherit"
    }
}));

export default function Navbar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.root}>
            <Toolbar>
                <Typography className={classes.title} component={Link} to='/'>VodakomBlue</Typography>
                <Button className={classes.button} component={Link} to="/packages">packages</Button>
            </Toolbar>
        </AppBar>
    )
}