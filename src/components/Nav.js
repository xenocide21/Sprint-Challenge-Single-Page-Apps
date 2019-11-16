
import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import LocationIcon from '@material-ui/icons/LocationCity';

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
                    <Tab icon={<HomeIcon/>} label="Home" {...a11yProps(0)} />
                    <Tab icon={<PersonIcon/>} label="Characters" {...a11yProps(1)} />
                    <Tab icon={<LocationIcon />} label="Location" {...a11yProps(2)} />
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
            </AppBar>
        </div>
    );
};
