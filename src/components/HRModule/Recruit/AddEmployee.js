import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';




function AddEmployee() {
    const newDate = new Date().toISOString();
    const positions = [
        {
            label:"Sales",
            value:"Sales"
        },
        {
            label:"HR",
            value:"HR"
        },
        {
            label:"Manager",
            value:"Manager"
        }
    ];
    const[currentPosition, setPosition] = useState();
    const handleCurrentPositionChange = (event) => {
        setPosition(event.target.value);
    }
    
    const classes = useStyles();
    return (
        <form >
            <Grid container spacing={3}>
            <div>
            <Grid item xs>
                <TextField required id="firstname" label="First Name" variant="outlined" />
            </Grid>
            <Grid item xs>
                <TextField required id="lastname" label="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs>
                <TextField required id="mothers-name" label="Mothers Name" variant="outlined" />
            </Grid>
            <Grid item xs>
                <TextField required id="birthdate"
                    label="Birthday"
                    type="date"
                    defaultValue={newDate}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                }} variant="outlined"/>
            </Grid>
            <Grid item xs>
                <TextField required id="email" label="Email address" variant="outlined" /> 
            </Grid>
            <Grid item xs>
                <TextField required id="id-card"  label="ID Card Number" variant="outlined" />
            </Grid>
            <Grid item xs>
                <TextField required id="phone-number"  label="Phone number" variant="outlined" />
            </Grid>
            <Grid item xs>
                <TextField
                    id="select-position"
                    select
                    label="Select"
                    value={currentPosition}
                    onChange={handleCurrentPositionChange}
                    helperText="Please select a position"
                    >
                    {positions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
                



                
                </div>
            </Grid>
        </form>
    )
}

export default AddEmployee

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    selectField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
  }));