import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';


function AddressTemplate(props) {



    const classes = useStyles();

    const handleAddressChange = (event) => {
        props.onChangeMethods.zipCode(event.target.value);
    }
    const handleZipCodeChange = (event) => {
        props.onChangeMethods.city(event.target.value);
    }
    const handleCityChange = (event) => {
        props.onChangeMethods.address(event.target.value)
    }

    return (
        <div className={classes.root}>
                <Grid container alignItems="center">
                    <Grid item xs={6} className={classes.gridItems}>
                        <TextField  required type="number" id="zip-code" label="Zip code" variant="outlined" className={classes.textFields} 
                        onChange={handleZipCodeChange}/>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItems}>
                        <TextField required  id="city" label="City" variant="outlined" className={classes.textFields} 
                        onChange={handleCityChange}/>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItems}>
                        <TextField required  id="address" label="Address" variant="outlined" className={classes.textFields} 
                        onChange={handleAddressChange}/>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItems}>
                        <TextField required  id="state" label="State" variant="outlined" className={classes.textFields} />
                    </Grid> 
                </Grid>
        </div>
    )
}

export default AddressTemplate


const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    textFields: {
        width: '100%'
    },
    gridItems: {
        padding: '2vw'
    }
})
