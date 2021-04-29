import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import UserTempalte from '../../Layout/UserTemplate';
import Grid from '@material-ui/core/Grid';
import Stepper from '../../Utility/Stepper';
import AddressTemplate from '../../Layout/AddressTemplate';
import { event } from 'jquery';
import axios from 'axios';
import { useSnackbar } from 'notistack';




function AddEmployee(props) {


    const { enqueueSnackbar } = useSnackbar();
    const [currentStepComponent, setCurrentStepComponent] = useState();
    const [currentStepCount, setCurrentStepCount] = useState(0);
    //Employee form states
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [mothersName, setMothersName] = useState();
    const [email, setEmail] = useState();
    const [phoneNum, setPhoneNum] = useState();
    const [birthDate, setBirthDate] = useState();
    const [idCardNum, setIdCardNum] = useState();
    const [position, setPositon] = useState();
    //Address form states
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [zipCode, setZipCode] = useState();

    //Form onChange handlers

    const employeeFormOnChanges = {
        firstName: setFirstName,
        lastName: setLastName,
        mothersName: setMothersName,
        birthday: setBirthDate,
        email: setEmail,
        idCard: setIdCardNum,
        phone: setPhoneNum,
        position: setPositon
    }

    const addressFormOnChanges = {
        zipCode: setZipCode,
        city: setCity,
        address: setAddress
    }

    useEffect(() => {
        setCurrentStepComponent(stepComponents[currentStepCount]);
    }, [currentStepCount])

    const handleNextButtonClick = () => {
        if (currentStepCount == stepComponents.length - 1) {
            console.log("the end");
            sendAddressFormAsync(sendEmployeeFormAsync);

        } else {
            setCurrentStepCount(currentStepCount + 1);
        }

    }
    const handleBackButtonClick = () => {
        setCurrentStepCount(currentStepCount - 1);
    }


    /* useEffect(() => {
        const nextButton = document.getElementById('next-button');
        const backButton = document.getElementById('back-button');
        
        backButton.addEventListener('click', handleBackButtonClick);
        nextButton.addEventListener('click', handleNextButtonClick);
        return () => {
            backButton.removeEventListener('click', handleBackButtonClick);
            nextButton.removeEventListener('click', handleNextButtonClick);
        }
    }, []) */

    const inputSteps = {
        0: [firstName, lastName, mothersName, email, phoneNum, idCardNum, birthDate, position],
        1: [zipCode, city, address]
    }

    const inputCheck = () => {
        const inputs = inputSteps[currentStepCount];
        let isValid = inputs.map(inp => inp === undefined ? false : true);
        if (isValid.includes(false)) {
            return false;
        }
        return true;
    }
    const sendAddressFormAsync = async (sendEmployeeForm) => {

        let addressObj = {
            ZipCode: zipCode,
            City: city,
            StreetAddress: address,
            IsBillingAddress: true,
            IsHomeAddress: true,
            CustomerId: null
        };

        await axios.post('/api/addresses', addressObj)
            .then(res => {
                sendEmployeeForm(res.data);
            })
    }

    const sendEmployeeFormAsync = async (addressData) => {
        let employeeObj = {
            "FirstName": firstName,
            "LastName": lastName,
            "Email": email,
            "IdCardNumber": idCardNum,
            "MothersName": mothersName,
            "BirthDate": "2015-01-02",
            "ContactPhoneNumber": phoneNum,
            "AddressId": addressData,
            "EmployeeType": position
        }
        await axios.post('/api/employees', employeeObj)
            .then(res => {
                enqueueSnackbar("Success", {
                    variant: 'success'
                });
            })
            .catch((error) => {
                enqueueSnackbar("Failed", {
                    variant: 'error'
                });
            })
    }

    const stepComponents = [<UserTempalte employee={true} onChangeMethods={employeeFormOnChanges} />,
    <AddressTemplate onChangeMethods={addressFormOnChanges} />]
    const classes = useStyles();

    return (
        <div >
            <form >
                <Grid container alignItems="center" className={classes.container}>
                    <Grid item xs={6}>
                        {currentStepComponent}
                    </Grid>

                    <Grid item xs={6}>
                        <Stepper getSteps={addEmployeeSteps} getStepContent={getAddEmployeeStepContent}
                            backButton={handleBackButtonClick} nextButton={handleNextButtonClick} validationMethod={inputCheck} re />
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default AddEmployee


const addEmployeeSteps = () => {
    return ['Personal information', 'Address'];
}

const getAddEmployeeStepContent = (step) => {
    switch (step) {
        case 0:
            return `Please fill all the required fields to proceed to the next step.`;
        case 1:
            return 'Please fill all the required fields to finish the process.';
        default:
            return 'Unknown step';
    }
}

const useStyles = makeStyles({
    container: {
        minHeight: '60vh'
    }
})