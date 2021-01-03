import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    siteTitle: {
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#fff',
      fontFamily: 'Montserrat, sans-serif',
      textAlign: 'center',
      lineHeight: 1.8,
      verticalAlign: 'middle',
      color: '#fff',
      fontSize: 24,
      width: 50,
      height: 50,
    },
    siteNav: {
      verticalAlign: 'middle', 
      lineHeight: 2.8, 
      fontSize:  18, 
      textAlign: 'center',
      color: '#fff'
    },
    buttons: {
      backgroundColor: '#141822',
      color: '#fff',
      "&:hover": {
        color: `#141822`,
        backgroundColor: `#4DA8DA`,
      },
    }
  }),
);

export default function SiteTitle() {
  const classes = useStyles();
  return (
    <div  className={classes.root}>
      <AppBar position="sticky"
      style={{background:'inherit'}}>
        <Toolbar>
          <Grid container xs={6}
          alignItems='center'
          justify='center'
          style={{
            margin: '0 auto'
           }}
          >
            <Grid 
            container 
            direction='row'>
              <Grid item xs={2} className={classes.siteNav}>
                <Button className={classes.buttons} href="#about" variant="contained">About</Button>
              </Grid>
              <Grid item xs={2} className={classes.siteNav}>
              <Button className={classes.buttons}  href="#projects" variant="contained">Projects</Button>
              </Grid>
              <Grid item style={{margin: '0 auto'}}
              className={classes.siteTitle}>
                  jm
              </Grid>
              <Grid 
              item xs={2} className={classes.siteNav}>
              <Button className={classes.buttons}  href="#awards" variant="contained">Awards</Button>
              </Grid>
              <Grid item xs={2} className={classes.siteNav}>
              <Button className={classes.buttons} href="#testimony" variant="contained">Testimonies</Button>
              </Grid>
            </Grid>
          </Grid>
        
        </Toolbar>
      </AppBar>
 

    </div>
  );
}
