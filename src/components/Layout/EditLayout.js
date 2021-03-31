import { Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { NavMenu } from './NavMenu';

const useStyles = makeStyles({
    container: {
        paddingTop: "70px",
        minHeight: "100vh",
        boxSizing: "border-box"
    },
    selectMenu: {
        backgroundColor: "#3f51b5"
    }
});

export const EditLayout = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.container}>
                <Grid item xs={2} className={classes.selectMenu}>
                    <NavMenu />
                </Grid>
                <Grid item xs={10}></Grid>
            </Grid>
        </div>
    )
}
