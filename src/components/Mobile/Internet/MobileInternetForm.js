import React, {useState, useEffect} from 'react';
import { useSnackbar } from 'notistack';
import {makeStyles, TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {

    },
}))

export default function MobileInternetForm(){
    const [Name, setName] = useState(null);
    const [Price, setPrice] = useState(null);
    const [ReleaseDate, setReleaseDate] = useState(null);
    const [Size, setSize] = useState(null);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const classes = useStyles();

    let SubmitFormEvent = (event) => {
        const internetPackage = {
            Name,
            Price,
            ReleaseDate,
            Size
        }
        console.log(internetPackage)
    } 

    let NameEvent = (event) => {
        setName(event.target.value);
    }

    let PriceEvent = (event) => {
        setPrice(event.target.value);
    }

    let ReleaseDateEvent = (event) => {
        setReleaseDate(event.target.value);
    }

    let SizeEvent = (event) => {
        setSize(event.target.value);
    }

    return(
        <div className={classes.main}>
            <form onSubmit={SubmitFormEvent}>
                <TextField
                    className={classes.input}
                    label="Name"
                    variant="outlined"
                    required
                    type="text"
                    onChange={NameEvent}
                />
                <TextField
                    className={classes.input}
                    label="Price"
                    variant="outlined"
                    required
                    type="number"
                    onChange={PriceEvent}
                />
                <TextField
                    className={classes.input}
                    label="Date"
                    variant="outlined"
                    required
                    type="date"
                    onChange={ReleaseDateEvent}
                />
                <TextField
                    className={classes.input}
                    label="Size"
                    variant="outlined"
                    required
                    type="number"
                    onChange={SizeEvent}
                />
            </form>
        </div>
    )
}