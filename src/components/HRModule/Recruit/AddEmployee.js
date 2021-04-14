import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import UserTempalte from '../../Layout/UserTemplate';
import Grid from '@material-ui/core/Grid';
import Stepper from '../../Utility/Stepper';
import AddressTemplate from '../../Layout/AddressTemplate';
import { event } from 'jquery';




function AddEmployee(props) {

    
    const[currentStepComponent, setCurrentStepComponent] = useState();
    const[currentStepCount, setCurrentStepCount] = useState(0);
    //Employee form states
    const[firstName, setFirstName] = useState();
    const[lastName, setLastName] = useState();
    const[mothersName, setMothersName] = useState();
    const[email, setEmail] = useState();
    const[phoneNum, setPhoneNum] = useState();
    const[birthDate, setBirthDate] = useState();
    const[idCardNum, setIdCardNum] = useState();
    const[position, setPositon] = useState();
    //Address form states
    const[address, setAddress] = useState();
    const[city, setCity] = useState();
    const[zipCode, setZipCode] = useState();

    const[employeeObj, setEmployeeObj] = useState({});
    const[addressObj, setAddressObj] = useState({});
    
    //Form onChange handlers
    //Employee form onChange handler methods
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }
    const handleMothersNameChange = (event) => {
        setMothersName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePhoneNumChange = (event) => {
        setPhoneNum(event.target.value);
    }
    const handleBirthDateChange = (event) => {
        setBirthDate(event.target.value);
    }
    const handleIdCardNumChange = (event) => {
        setIdCardNum(event.target.value);
    }
    const handlePositionChange = (event) => {
        setPositon(event.target.value);
    }
    //Adddress form onChange handler methods
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }
    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    }
    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const employeeFormOnChanges = {
        firstName:handleFirstNameChange,
        lastName:handleLastNameChange,
        mothersName:handleMothersNameChange,
        birthday:handleBirthDateChange,
        email:handleEmailChange,
        idCard:handleIdCardNumChange,
        phone:handlePhoneNumChange,
        position:handlePositionChange
    }

    const addressFormOnChanges = {
        zipCode:handleZipCodeChange,
        city:handleCityChange,
        address:handleAddressChange
    }

    const createEmployeeObj = () => {
        return {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            IdCardNumber: idCardNum,
            MothersName: mothersName,
            BirthDate: birthDate,
            ContactPhoneNumber: phoneNum
        }
    }

    const createAddressObj = () => {
        return {
            ZipCode: zipCode,
            City: city,
            StreetAddress: address,
            IsBillingAddress: true,
            IsHomeAddress: true,
            CustomerId: null
        }
    }

    useEffect(() => {
        setCurrentStepComponent(stepComponents[currentStepCount]);
    }, [currentStepCount])
    
    const handleNextButtonClick = () => {
        if (currentStepCount == stepComponents.length-1){
            console.log("the end");
            setAddressObj(createAddressObj());
            setEmployeeObj(createEmployeeObj());
        }else{
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
        0:[firstName, lastName, mothersName, email, phoneNum, idCardNum, birthDate, position],
        1:[zipCode,city,address]
    }
    const inputCheck = () => {
        const inputs = inputSteps[currentStepCount];
        let isValid = inputs.map(inp => inp === undefined ? false : true);
        if (isValid.includes(false)){
            return false;
        }
        return true;
    }
    console.log(inputCheck())
    
    const stepComponents = [<UserTempalte employee={true} onChangeMethods={employeeFormOnChanges}/>,
                             <AddressTemplate onChangeMethods={addressFormOnChanges}/>]
    const classes = useStyles();
    
    return (
        <div >
        <form >
        <Grid container   alignItems="center" className={classes.container}>
            <Grid item xs={6}>
               {currentStepComponent}
            </Grid>
            
            <Grid item xs={6}>
                <Stepper getSteps={addEmployeeSteps} getStepContent={getAddEmployeeStepContent} 
                backButton={handleBackButtonClick} nextButton={handleNextButtonClick} validationMethod={inputCheck} re/>
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