import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <AppBar>
            <Toolbar>
                <Typography component={Link} to='/'>VodakomBlue</Typography>
            </Toolbar>
        </AppBar>
    )
}