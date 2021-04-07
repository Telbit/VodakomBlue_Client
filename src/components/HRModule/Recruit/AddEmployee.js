import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';




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
            <div>
                <TextField required id="firstname" label="First Name" variant="outlined" />
                <TextField required id="lastname" label="Last Name" variant="outlined" />
                <TextField required id="mothers-name" label="Mothers Name" variant="outlined" />
                <TextField required id="birthdate"
                    label="Birthday"
                    type="date"
                    defaultValue={newDate}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                }} variant="outlined"/>
                <TextField required id="email" label="Email address" variant="outlined" />

                <TextField required id="id-card"  label="ID Card Number" variant="outlined" />

                <TextField required id="phone-number"  label="Phone number" variant="outlined" />

                <TextField
                    id="select-position"
                    select
                    label="Select"
                    value={currentPosition}
                    className={classes.selectField}
                    onChange={handleCurrentPositionChange}
                    helperText="Please select a position"
                    >
                    {positions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>


                

                
            </div>
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