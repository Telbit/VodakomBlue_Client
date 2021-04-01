import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Router>
        <SnackbarProvider maxSnack={3}>
            <App />
        </SnackbarProvider>
    </Router>,
    rootElement);

