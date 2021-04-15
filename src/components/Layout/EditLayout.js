import { Grid } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { HomeInternetForm } from '../home/internet/HomeInternetForm';
import { FormContext } from '../../FormContext'
import { HomeTvForm } from '../home/Tv/HomeTvForm';
import { HomePhoneForm } from '../home/phone/HomePhoneForm';

const useStyles = makeStyles({
    container: {
        paddingTop: "70px",
        minHeight: "100vh",
        boxSizing: "border-box"
    },
    selectMenu: {
        backgroundColor: "#3f51b5",
        borderRadius: 3
    }
});

const switchForm = (form) => {
    switch (form) {
        case "homeInternet":
            return <HomeInternetForm />
        case "homeTv":
            return <HomeTvForm />
        case "homePhone":
            return <HomePhoneForm />
        default:
            return <h1>Click to the home internet</h1>
    }
};

export const EditLayout = (props) => {
    const classes = useStyles();
    const [FormName] = useContext(FormContext);
    const [Form, setForm] = useState();

    useEffect(() => {
        setForm(switchForm(FormName));
    }, [FormName])

    return (
        <div>
            <Grid container className={classes.container}>
                <Grid item xs={2} className={classes.selectMenu}>
                    {props.navarea}
                </Grid>
                <Grid item xs={10}>
                    {Form}
                </Grid>
            </Grid>
        </div>
    )
}
