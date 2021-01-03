import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
          <Grid container xs={5}
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
                About
              </Grid>
              <Grid item xs={2} className={classes.siteNav}>
                Projects
              </Grid>
              <Grid item style={{margin: '0 auto'}}
              className={classes.siteTitle}>
                  jm
              </Grid>
              <Grid 
              item xs={2} className={classes.siteNav}>
                Awards
              </Grid>
              <Grid item xs={2} className={classes.siteNav}>
                Testimonies
              </Grid>
            </Grid>
          </Grid>
        
        </Toolbar>
      </AppBar>
 

    </div>
  );
}
