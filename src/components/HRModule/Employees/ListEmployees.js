import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


function ListEmployees() {

    const[employees, setEmployees] = useState([]);
    const positions = ["Sales","HR", "Manager"];
    
    useEffect(() => {
        axios('/api/employees')
            .then(res => {
                setEmployees(res.data);
            })
    }, []);

    const classes = useStyles();

    return (
       <div className={classes.container}>
           <TableContainer component={Paper}>
               <Table className={classes.table} aria-label="simple table">
                   <TableHead className={classes.head}>
                       <TableRow>
                           <TableCell>Employees</TableCell>
                           <TableCell alighn="right">First Name</TableCell>
                           <TableCell alighn="right">Last Name</TableCell>
                           <TableCell alighn="right">Position</TableCell>
                           <TableCell alighn="right">Email Address</TableCell>
                           <TableCell alighn="right">ID Card Number</TableCell>
                           <TableCell alighn="right">Birth Date</TableCell>
                           <TableCell alighn="right">Contact Phone Number</TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                        {employees != [] ? employees.map(employee => (

                            <TableRow key={employee.id}>
                                <TableCell component="th" scope="row"> {employee.firstName + " " + employee.lastName}</TableCell>
                                <TableCell align="center">{employee.firstName}</TableCell>
                                <TableCell align="center">{employee.lastName}</TableCell>
                                <TableCell align="center">{positions[employee.employeeType -1]}</TableCell>
                                <TableCell align="center">{employee.email}</TableCell>
                                <TableCell align="center">{employee.idCardNumber}</TableCell>
                                <TableCell align="center">{new Date(employee.birthDate).toISOString().split('T')[0]}</TableCell>
                                <TableCell align="center">{employee.contactPhoneNumber}</TableCell>
                            </TableRow>
                        )) : <TableRow></TableRow>}
                   </TableBody>
               </Table>
           </TableContainer>
       </div>
    )
}

export default ListEmployees

const useStyles = makeStyles({
    container: {
        paddingTop: '15%',
        maxWidth: '65vw'
    },
    table: {
        minWidth: 650,
    },
    head: {
        backgroundColor: "#E9E9E9"
    }
})