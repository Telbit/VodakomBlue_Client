import React, { useState } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
        textDecoration: "none",
        color: "inherit"
    },
    button: {
        color: "inherit"
    }
});
export default function Navbar() {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
                <Typography className={classes.title} component={Link} to='/'>VodakomBlue</Typography>
                <Button className={classes.button} component={Link} to="/create">create</Button>
            </Toolbar>
        </AppBar>
    )
}