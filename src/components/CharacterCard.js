import React from "react";

import { Paper, Typography, Grid, makeStyles, CssBaseline, Container } from './Styles/CharacterCardStyles';

const useStyles = makeStyles(theme => ({
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
        <Container style={{margin: 'unset',
            maxWidth: '49%'}}
              maxWidth="sm">
          <Grid container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
          >
              <Typography component='div' style={{ height: '600px', width: '300px'}}>
                  <div>
                    <Paper className={classes.paper}> Name: {props.name}</Paper>
                      <Paper className={classes.paper}>
                    <img style={{maxWidth: `-webkit-fill-available`}} className={classes.paper} src={props.image} alt={props.image}/>
                      </Paper>
                    <Paper className={classes.paper}> Species: {props.species}</Paper>
                    <Paper className={classes.paper}> Status: {props.status}</Paper>
                    <Paper className={classes.paper}> Origin: {props.origin}</Paper>
                  </div>
              </Typography>
          </Grid>
        </Container>
      </React.Fragment>
)}
