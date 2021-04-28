import React, {useState, useEffect} from 'react';
import { useSnackbar } from 'notistack';
import {makeStyles, TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {

    },
}))

export default function MobiePhoneForm(){
    const [Name, setName] = useState(null);
    const [Price, setPrice] = useState(null);
    const [ReleaseDate, setReleaseDate] = useState(null);
    const [FreeMinute, setFreeMinute] = useState(null);
    const [FreeSms, setFreeSms] = useState(null);
    const [MinuteFee, setMinuteFee] = useState(null);
    const [InsideNetwork, setInsideNetwork] = useState(null);
    const [OutsideNetwork, setOutsideNetwork] = useState(null);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const classes = useStyles();

    let SubmitFormEvent = (event) => {
        const phonePackage = {
            Name,
            Price,
            ReleaseDate,
            FreeMinute,
            FreeSms,
            MinuteFee,
            InsideNetwork,
            OutsideNetwork
        }
        console.log(phonePackage)
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

    let FreeMinuteEvent = (event) => {
        setFreeMinute(event.target.value);
    }

    let FreeSmsEvent = (event) => {
        setFreeSms(event.target.value);
    }

    let MinuteFeeEvent = (event) => {
        setMinuteFee(event.target.value);
    }

    let InsideNetworkEvent = (event) => {
        setInsideNetwork(event.target.value);
    }

    let OutSideNetworkEvent = (event) => {
        setOutsideNetwork(event.target.value);
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
                    label="FreeMinutes"
                    variant="outlined"
                    required
                    type="number"
                    onChange={FreeMinuteEvent}
                />
                <TextField
                    className={classes.input}
                    label="FreeSms"
                    variant="outlined"
                    required
                    type="number"
                    onChange={FreeSmsEvent}
                />
                <TextField
                    className={classes.input}
                    label="MinuteFee"
                    variant="outlined"
                    required
                    type="number"
                    onChange={MinuteFeeEvent}
                />
                <TextField
                    className={classes.input}
                    label="InsideNetwork"
                    variant="outlined"
                    required
                    type="number"
                    onChange={InsideNetworkEvent}
                />
                <TextField
                    className={classes.input}
                    label="OutsideNetwork"
                    variant="outlined"
                    required
                    type="number"
                    onChange={OutSideNetworkEvent}
                />
            </form>
        </div>
    )
}