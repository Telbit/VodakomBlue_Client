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
            value:1
        },
        {
            label:"HR",
            value:2
        },
        {
            label:"Manager",
            value:3
        }
    ];
    const[currentPosition, setPosition] = useState();
    const[isPhoneNumValid, setIsPhoneNumValid] = useState();
    const handleCurrentPositionChange = (event) => {
        setPosition(event.target.value);
        handlePositionChange(event)
    }

    const handleFirstNameChange = (event) => {
        props.onChangeMethods.firstName(event.target.value);
    }
    const handleLastNameChange = (event) => {
        props.onChangeMethods.lastName(event.target.value);
    }
    const handleMothersNameChange = (event) => {
        props.onChangeMethods.mothersName(event.target.value);
    }
    const handleEmailChange = (event) => {
        props.onChangeMethods.email(event.target.value);
    }
    const handlePhoneNumChange = (event) => {
        props.onChangeMethods.phone(event.target.value);
        if (event.target.value.length == 11 || event.target.value.length == 12){
            setIsPhoneNumValid(false);
        }else{
            setIsPhoneNumValid(true);
        }
    }
    const handleBirthDateChange = (event) => {
        props.onChangeMethods.birthday(new Date(event.target.value));
    }
    const handleIdCardNumChange = (event) => {
        props.onChangeMethods.idCard(event.target.value);
    }
    const handlePositionChange = (event) => {
        props.onChangeMethods.position(parseInt(event.target.value));
    }
    
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container   alignItems="center">
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField  required id="firstname" label="First Name" variant="outlined" className={classes.textFields} 
                    onChange={handleFirstNameChange}/>
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField required id="lastname" label="Last Name" variant="outlined" className={classes.textFields}
                    onChange={handleLastNameChange} />
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField required id="mothers-name" label="Mothers Name" variant="outlined" className={classes.textFields}
                     onChange={handleMothersNameChange} />
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField required id="birthdate"
                        label="Birthday"
                        type="date"
                        defaultValue={newDate}
                        className={classes.textFields}
                        InputLabelProps={{
                        shrink: true,
                    }} variant="outlined"
                        onChange={handleBirthDateChange}
                    />
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField required id="email" label="Email address" variant="outlined" className={classes.textFields} 
                    onChange={handleEmailChange}/> 
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField required id="id-card"  label="ID Card Number" variant="outlined" className={classes.textFields} 
                    onChange={handleIdCardNumChange}/>
                </Grid>
                <Grid item xs={6} className={classes.gridItems}>
                    <TextField error={isPhoneNumValid} required id="phone-number"  label="Phone number" variant="outlined" className={classes.textFields} 
                    onChange={handlePhoneNumChange} helperText="Starts with: +36 or 06"/>
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