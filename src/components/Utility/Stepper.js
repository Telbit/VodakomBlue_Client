import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  }/* ,
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  }, */
}));

//You have to pass getSteps, getStepContent props to use this stepper !
// In getSteps: You pass a list with the Stepper options title
//In getStepContent: A func. which returns a switch case with exactly as many content as many steps, it has one param.: steps 

export default function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const[errorValue, setErrorValue] = useState(true);
  const[disabledValue, setDisabledValue] = useState(false);
  const[isAddressFormValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(props.validationMethod());
    setErrorValue(!props.validationMethod());
  }, [props.validationMethod()])

  useEffect(() => {
    setDisabledValue(errorValue);
  }, [isAddressFormValid])

  const steps = props.getSteps();


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    props.nextButton();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    props.backButton();
  };

  const handleReset = () => {
    setActiveStep(0);
    
  };

  return (
    <div className={classes.root}>
      <Stepper  activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} >
            <StepLabel error={errorValue}>{label}</StepLabel>
            <StepContent >
              <Typography>{props.getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    id="back-button"
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    id="next-button"
                    disabled={disabledValue}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          {/* <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button> */}
        </Paper>
      )}
    </div>
  );
}