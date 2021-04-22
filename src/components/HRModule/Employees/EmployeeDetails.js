import React, {useState} from 'react';
import Fuse from 'fuse.js';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {makeStyles} from '@material-ui/core/styles';

const list = [{
    id: 1,
    title: "Gatsby",
    author: "F. Gabor"
},
{
    id: 2,
    title: "Gotham G",
    author: "F. Gabor"
},
{
    id: 3,
    title: "Vortex vol.3",
    author: "Kontex"
}
]


function EmployeeDetails() {

    const[selectedItem, setSelectedItem] = useState();
    const[query, setQuery] = useState('');
    const fuse = new Fuse(list, {
        keys:['author', 'title']
    }); 

    const results = fuse.search(query);
    const characterResults = results.map(res => res.item);

    const handleOnChange = ({currentTarget = {}}) => {
        const {value} = currentTarget;
        setQuery(value);
    }

    const classes = useStyles();
    return (
        <div>
            <div className={classes.input}>
                <InputLabel htmlFor="input-with-icon-adornment">Type the Employee name </InputLabel>
                <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }
                value={query}
                onChange={handleOnChange}
                />
            </div>
            <div>
                {characterResults.map(res => (
                    <div className={classes.result}>
                        {/* <h1>{res.title}</h1> */}
                        <h1>{res.author}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EmployeeDetails

const useStyles = makeStyles({
    container: {

    },
    input: {
        paddingTop: '10%',
        paddingLeft: '20%'
    },
    result: {
        paddingLeft: '20%'
    }
})
