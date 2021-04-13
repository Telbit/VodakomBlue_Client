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
    
    useEffect(() => {
        setCurrentStepComponent(stepComponents[currentStepCount])
    }, [currentStepCount])
    
    const handleNextButtonClick = () => {
        if (currentStepCount == stepComponents.length-1){
            console.log("the end")
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
    
    
    
    
    const stepComponents = [<UserTempalte employee={true}/>, <AddressTemplate/>]
    
    return (
        <div >
        <form >
        <Grid container   alignItems="center">
            <Grid item xs={6}>
               {currentStepComponent}
            </Grid>
            
            <Grid item xs={6}>
                <Stepper getSteps={addEmployeeSteps} getStepContent={getAddEmployeeStepContent} 
                backButton={handleBackButtonClick} nextButton={handleNextButtonClick}/>
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
        return `Please fill all the required field according to the new Employee`;
      case 1:
        return 'If the employee billing address and home address is the same, check only the home address button.';
      default:
        return 'Unknown step';
    }
  }