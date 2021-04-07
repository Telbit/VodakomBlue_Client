import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';




function UserTemplate(props) {
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
        <div className={classes.root}>
        <form >
            <Grid container   alignItems="center">
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField required id="firstname" label="First Name" variant="outlined" className={classes.textFields} />
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField required id="lastname" label="Last Name" variant="outlined" className={classes.textFields} />
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField required id="mothers-name" label="Mothers Name" variant="outlined" className={classes.textFields} />
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField required id="birthdate"
                        label="Birthday"
                        type="date"
                        defaultValue={newDate}
                        className={classes.textFields}
                        InputLabelProps={{
                        shrink: true,
                    }} variant="outlined"/>
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField required id="email" label="Email address" variant="outlined" className={classes.textFields} /> 
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField required id="id-card"  label="ID Card Number" variant="outlined" className={classes.textFields} />
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField required id="phone-number"  label="Phone number" variant="outlined" className={classes.textFields} />
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    {props.employee && <TextField
                        id="select-position"
                        select
                        label="Select"
                        value={currentPosition}
                        onChange={handleCurrentPositionChange}
                        className={classes.textFields}
                        variant="outlined"
                        >
                        {positions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>}
                </Grid>
            </Grid>            
        </form>
        </div>  
    )
}

export default UserTemplate

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    
    selectField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    root: {
        flexGrow: 1
    },
    gridItems: {
        padding: '2vw',
        
    },
    textFields: {
        width: '100%'
    }
  }));