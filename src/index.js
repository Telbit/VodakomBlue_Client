import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const rootElement = document.getElementById('root');

const theme = createMuiTheme({
    bgColor: {
        main: "#4282B3",
        secondary: "#C3CDD5"
    },
    errorColor: {
        main: "#D72638"
    }
})

ReactDOM.render(
    <Router>
        <SnackbarProvider maxSnack={3}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </SnackbarProvider>
    </Router>,
    rootElement);

