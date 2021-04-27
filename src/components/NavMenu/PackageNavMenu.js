import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import React, { useContext, useState } from 'react'
import { FormContext } from '../../FormContext';
import { makeStyles } from '@material-ui/core';
import { navMenu,  } from '../../objects/PackageNavMenuObject';
import { hrNavMenu } from '../../objects/HrNavMenuObj';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: "inherited",
        color: "white",
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
}));

const PrintNavButtons = (obj) => {
    let listKey = 0;
    const [IsOpen, setIsOpen] = useState(true);
    const [, setFormName] = useContext(FormContext);
    return (
        Object.keys(obj).map((keyName) => {
            if (keyName === "children") {
                return (
                    <div key={listKey++}>
                        <ListItem style={{ paddingLeft: obj['padding'] * 50 }} button onClick={() => setIsOpen(!IsOpen)}>
                            <ListItemText primary={obj["name"]}></ListItemText>{ }
                            {IsOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={IsOpen} timeout="auto">
                            <List disablePadding>
                                {PrintNavButtons(obj[keyName])}
                            </List>
                        </Collapse>
                    </div>
                )
            }
            else if (typeof obj[keyName] === "object") {
                return (
                    PrintNavButtons(obj[keyName])
                )
            }

            if (!obj["children"] && keyName === "name") {
                return (
                    <ListItem style={{ paddingLeft: obj['padding'] * 50 }} button key={listKey++} onClick={() => setFormName(obj["formName"])}>
                        <ListItemText primary={obj[keyName]}></ListItemText>
                    </ListItem>
                )
            }
            else {
                return null;
            }
        })
    );
};

export const PackageNavMenu = () => {
    const classes = useStyles();
    return (
        <List className={classes.root} >
            {PrintNavButtons(hrNavMenu)}
        </List>
    )
}
