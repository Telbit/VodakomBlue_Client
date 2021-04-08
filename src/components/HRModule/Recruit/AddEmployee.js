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

    const stepComponents = [<UserTempalte employee={true}/>, <AddressTemplate/>]

    const[currentStepComponent, setCurrentStepComponent] = useState();
    const[currentStepCount, setCurrentStepCount] = useState(0);
    console.log(currentStepCount);

    useEffect(() => {
        setCurrentStepComponent(stepComponents[currentStepCount])
    }, [currentStepCount])

    const handleNextButtonClick = () => {
        setCurrentStepCount(currentStepCount + 1);
        /* if (nextButton.childNodes[0].outerText !== "FINISH"){
        }else{
            console.log("the end")
        } */
    }

    const handleBackButtonClick = () => {
        setCurrentStepCount(currentStepCount - 1);
    }

    useEffect(() => {
        const nextButton = document.getElementById('next-button');
        const backButton = document.getElementById('back-button');
        console.log(nextButton.childNodes[0].outerText)

        backButton.addEventListener('click', handleBackButtonClick);
        nextButton.addEventListener('click', handleNextButtonClick);
        return () => {
            backButton.removeEventListener('click', handleBackButtonClick);
            nextButton.removeEventListener('click', handleNextButtonClick);
        }
    }, [handleBackButtonClick, handleNextButtonClick])


    
    

    return (
        <div >
        <form >
        <Grid container   alignItems="center">
            <Grid item xs={6}>
               {currentStepComponent}
            </Grid>
            
            <Grid item xs={6}>
                <Stepper getSteps={addEmployeeSteps} getStepContent={getAddEmployeeStepContent}/>
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