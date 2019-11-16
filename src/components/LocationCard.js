import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Paper} from "@material-ui/core";
// import styled from 'styled-components';

// const Card = styled.div`
//
// `;

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function LocationCard(props) {
    const classes = useStyles();
  return (
      <React.Fragment>
        <CssBaseline/>
        <Container maxWidth="sm">
            <Typography component='div' style={{height: '300px', width: '300px'}}>
              <Paper className={classes.paper}>Planet: {props.name}</Paper>
              <Paper className={classes.paper}>Type: {props.type}</Paper>
              <Paper className={classes.paper}>Dimension: {props.dimension}</Paper>
            </Typography>
        </Container>
      </React.Fragment>
  );
};