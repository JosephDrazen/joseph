import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs';
import { makeStyles } from '@material-ui/core/styles';
//@ts-ignore
import SiteTitle from './SiteTitle.tsx';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
//@ts-ignore
import Intro from '../sections/intro';
//@ts-ignore
import joe from '../sections/Joe.png';



const Hero = () => {
  return (
    <React.Fragment>
      <SiteTitle />
      <ParallaxLayer
      offset={0}
      factor={1}
      speed={0.2}>
      <Grid 
      container 
      alignItems='center'
      justify='center'
      direction='column'
      spacing={8}>
        <Grid item xs={6}></Grid>
        <Grid item xs={10}>
          <Grid container direction='row'>
            <Grid item xs={5}>
              <img src={joe} style={{width: 1400, marginTop: -150, marginLeft: -250}} alt="A photo of Joseph" />
            </Grid>
            <Grid item xs={6} style={{marginTop: 10}}>
              <Intro />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <ArrowDownwardIcon style={{color: '#fff', fontSize: 48}}/>
        </Grid>

      </Grid>
      <div id='about'/>
    </ParallaxLayer>

  </React.Fragment>
  )
}

export default Hero;
