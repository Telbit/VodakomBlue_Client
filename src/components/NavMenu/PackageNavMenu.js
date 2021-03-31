import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: "inherited",
        color: "white"
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
}));

export const PackageNavMenu = () => {
    const classes = useStyles();
    const [HomeOpen, setHomeOpen] = useState(true);
    const [MobileOpen, setMobileOpen] = useState(true);

    return (
        <List className={classes.root}>
            <ListItem button onClick={() => setHomeOpen(!HomeOpen)}>
                <ListItemText primary="Home" />
                {HomeOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={HomeOpen} timeout="auto" >
                <List disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Internet" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Tv" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Phone" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={() => setMobileOpen(!MobileOpen)}>
                <ListItemText primary="Mobile" />
                {MobileOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={MobileOpen} timeout="auto" >
                <List disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Internet" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Phone" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}
