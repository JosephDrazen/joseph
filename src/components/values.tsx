/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
// @ts-ignore
import ValuesMDX from "../sections/values"
import ValuesCard from "./ValuesCard"
import Grid from '@material-ui/core/Grid';
import dog from '../sections/1.png';
import learn from '../sections/2.png';
import lead from '../sections/3.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Values = () => (
  <React.Fragment>
    <br />
  <Grid container>
    <div id='values'/>
    <Grid item xs={4}>
    <Card variant='outlined' style={{width: 350, height: 250, position: 'absolute', backgroundColor:'#2c364a', color:'#fff'}}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <Typography variant='h6' style={{textTransform: 'uppercase'}}>
                Dog-Driven Development
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant='body2'>
                The dollars I earn while coding help put food in my dog's bowl. 
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </Grid>
    <Grid item xs={4}>
    <Card variant='outlined' style={{width: 350, height: 250, position: 'absolute', backgroundColor:'#2c364a', color:'#fff'}}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <Typography variant='h6' style={{textTransform: 'uppercase'}}>
                LEARNing THROUGH CHALLENGE AND CHANGE
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant='body2'>
                To be a constant learner, I believe in challenging myself and my team to explore new ways of thinking and doing.  
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </Grid>
    <Grid item xs={4}>
    <Card variant='outlined' style={{width: 350, height: 250, position: 'absolute', backgroundColor:'#2c364a', color:'#fff'}}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <Typography variant='h6' style={{textTransform: 'uppercase'}}>
                Acting like an Owner
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant='body2'>
                Acting like an owner allows for more accountability, an entrepreneurial spirit, and more meaningful work.  
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </Grid>
  </Grid>
  </React.Fragment>
  
)

export default Values
