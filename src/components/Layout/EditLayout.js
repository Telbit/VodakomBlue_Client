import { Grid } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { HomeInternetForm } from '../home/internet/HomeInternetForm';
import { FormContext } from '../../FormContext'
import MobileInternetForm from '../Mobile/Internet/MobileInternetForm';
import MobilePhoneForm from '../Mobile/Phone/MobilePhoneForm';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: "70px",
        minHeight: "100vh",
        boxSizing: "border-box"
    },
    selectMenu: {
        borderRadius: 3,
        backgroundColor: theme.bgColor.main,
    }
}));

const switchForm = (form) => {
    switch (form) {
        case "homeInternet":
            return <HomeInternetForm />
        case "mobileInternet":
            return <MobileInternetForm/>
        case "mobilePhone":
            return <MobilePhoneForm/>
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
