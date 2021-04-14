import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import { ExpandLess, ExpandMore } from "@material-ui/icons";


function HRNavMenu() {
    const classes = useStyles();
    const [HomeOpen, setHomeOpen] = useState(true);
    const [MobileOpen, setMobileOpen] = useState(true);

    return (
        <List className={classes.root}>
            <ListItem button onClick={() => setHomeOpen(!HomeOpen)}>
                <ListItemText primary="Recruit" />
                {HomeOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={HomeOpen} timeout="auto" >
                <List disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Add employee" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Current applicants" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={() => setMobileOpen(!MobileOpen)}>
                <ListItemText primary="Employees" />
                {MobileOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={MobileOpen} timeout="auto" >
                <List disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Active employees" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Departments" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Exit employee"/>
                    </ListItem>
                </List>
            </Collapse>
        </List>
    )
}

export default HRNavMenu

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: "inherited",
        color: "white"
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
}));