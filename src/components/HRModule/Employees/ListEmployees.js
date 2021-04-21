import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/core/'

function ListEmployees() {

    const[employees, setEmployees] = useState();
    const columns = [
        {field: 'firstname', headerName: 'First name', width: '130'},
        {field: 'lastname', headerName: 'Last name', width: '130'},
        {field: 'position', headerName: 'position', width: '130'},
        {field: 'email', headerName: 'Email address', width: '130'},
        {field: 'idcard', headerName: 'ID Card Number', width: '60'},
        {field: 'birthdate', headerName: 'Birth date', width: '130'},
        {field: 'phone', headerName: 'Contact phone', width: '130'},
    ]
    
    useEffect(() => {
        axios('/api/employees')
            .then(res => setEmployees(res.data))
    }, []);


    console.log(employees);

    return (
        <div>
            
        </div>
    )
}

export default ListEmployees