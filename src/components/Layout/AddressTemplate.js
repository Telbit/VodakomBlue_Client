import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';


function AddressTemplate(props) {



    const classes = useStyles();
    return (
        <div className={classes.root}>
                <Grid container alignItems="center">
                    <Grid item xs={6} className={classes.gridItems}>
                        <TextField required type="number" id="zip-code" label="Zip code" variant="outlined" className={classes.textFields} 
                        onChange={props.onChangeMethods.zipCode}/>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItems}>
                        <TextField required  id="city" label="City" variant="outlined" className={classes.textFields} 
                        onChange={props.onChangeMethods.city}/>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItems}>
                        <TextField required  id="address" label="Address" variant="outlined" className={classes.textFields} 
                        onChange={props.onChangeMethods.address}/>
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
