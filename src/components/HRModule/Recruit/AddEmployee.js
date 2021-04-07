import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import UserTempalte from '../../Layout/UserTemplate';
import Grid from '@material-ui/core/Grid';




function AddEmployee(props) {
    
    
    return (
        <div >
        <form >
        <Grid container   alignItems="center">
            <Grid item xs={6}>
                <UserTempalte employee={true} />
            </Grid>
            
            <Grid item xs={6}>
                <div><h1>Szevasztooook</h1></div>
            </Grid>
        </Grid>
        </form>
        </div>  
    )
}

export default AddEmployee

