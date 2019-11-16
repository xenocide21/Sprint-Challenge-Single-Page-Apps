import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Paper} from "@material-ui/core";

// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   flex-direction: column;
//   margin: 2%;
//   border: 2px solid black;
//   height: 250px;
//   width: 250px;
// `;
// const Title = styled.h1`
//   font-size: 1.5rem;
//   text-align: center;
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

export default function CharacterCard(props) {
  const classes = useStyles();
  return (
      <React.Fragment>
        <CssBaseline />
        <Container
              maxWidth="sm">
          <Grid className="card" container
                direction="row"
                justify="center"
                alignItems="center"
          >
              <Typography component='div' style={{ height: '300px', width: '300px'}}>
                  <div>
                    <Paper className={classes.paper}> Name: {props.name}</Paper>
                    {/*<Paper className={classes.paper} url={props.image} alt=""/>*/}
                    <Paper className={classes.paper}> Species: {props.species}</Paper>
                    <Paper className={classes.paper}> Status: {props.status}</Paper>
                    <Paper className={classes.paper}> Origin: {props.origin}</Paper>
                  </div>
              </Typography>
          </Grid>
        </Container>
      </React.Fragment>
)}
