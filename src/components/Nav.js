
import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Nav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className="navigation">
                <Tabs value={value} onChange={handleChange} aria-label="tabs">
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="Characters" {...a11yProps(1)} />
                    <Tab label="Location" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <NavLink style={{textDecoration: 'none', color: 'white'}} to="/">Home Page</NavLink>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <NavLink style={{textDecoration: 'none', color: 'white'}} to="/characters">Characters Page</NavLink>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <NavLink style={{textDecoration: 'none', color: 'white'}} to="/location">Locations Page</NavLink>
                </TabPanel>
                {/*<div>*/}
                {/*    <NavLink to="/characters">Characters</NavLink>*/}
                {/*    <NavLink to="/location">Location</NavLink>*/}
                {/*</div>*/}
            </AppBar>
        </div>
    );
};
