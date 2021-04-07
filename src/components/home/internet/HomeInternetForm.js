import React, { useContext, useState } from 'react'
import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import axios from 'axios';
import { FormContext } from '../../../FormContext';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles({
    root: {
        height: "100%",
        backgroundColor: "rgba(0, 204, 255, 0.2)",
        textAlign: "center"
    },
    container: {
        padding: "2vw",
    },
    input: {
        width: "100%",
    },
    gridItem: {
        padding: "2vw"
    },
    button: {
        border: "1px solid gray"
    }
});

export const HomeInternetForm = (props) => {
    const classes = useStyles();
    const [Name, setName] = useState("");
    const [Price, setPrice] = useState(0);
    const [ReleaseDate, setReleaseDate] = useState(new Date().toISOString().split('T')[0]);
    const [DownloadSpeed, setDownloadSpeed] = useState(0);
    const [UploadSpeed, setUploadSpeed] = useState(0);
    const [Technology, setTechnology] = useState("");
    const [, setFormName] = useContext(FormContext);
    const { enqueueSnackbar } = useSnackbar();

    const SendForm = (e) => {
        e.preventDefault();
        const internetPackage = {
            Name,
            Price,
            ReleaseDate,
            DownloadSpeed,
            UploadSpeed,
            Technology
        }
        axios.post("/api/homeinternet", internetPackage)
            .then(res => {
                if (res.status === 200) {
                    enqueueSnackbar("Success", {
                        variant: 'success',
                    });
                    setFormName("");
                }
            })
    };

    return (
        <div className={classes.root}>
            <h1>Home Internet</h1>
            <form onSubmit={SendForm} autoComplete="off">
                <Grid container className={classes.container}>
                    <Grid item xs={4} className={classes.gridItem}>
                        <TextField
                            className={classes.input}
                            label="Name"
                            variant="outlined"
                            required
                            type="text"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.gridItem}>
                        <TextField
                            className={classes.input}
                            label="Price (HUF)"
                            variant="outlined"
                            required
                            type="number"
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.gridItem}>
                        <TextField
                            className={classes.input}
                            label="Release date"
                            variant="outlined"
                            required
                            type="date"
                            value={ReleaseDate}
                            onChange={(event) => setReleaseDate(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.gridItem}>
                        <TextField
                            className={classes.input}
                            label="Download speed (Mbit/s)"
                            variant="outlined"
                            required
                            type="number"
                            onChange={(event) => setDownloadSpeed(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.gridItem}>
                        <TextField
                            className={classes.input}
                            label="Upload speed (Mbit/s)"
                            variant="outlined"
                            required
                            type="number"
                            onChange={(event) => setUploadSpeed(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.gridItem}>
                        <FormControl
                            className={classes.input}
                            variant="outlined"
                            required
                        >
                            <InputLabel>Technology</InputLabel>
                            <Select label="Technology"
                                onChange={(event) => setTechnology(event.target.value)}
                                type="text"
                                value={Technology}
                            >
                                <MenuItem value="dsl">DSL</MenuItem>
                                <MenuItem value="koax">KOAX</MenuItem>
                                <MenuItem value="fiber">FIBER</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} className={classes.gridItem}>
                        <Button type="submit" className={`${classes.input} ${classes.button}`}>Save</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
