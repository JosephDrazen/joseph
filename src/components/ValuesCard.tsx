import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

type ValuesCardProps = {
  title: string
  imga: string
  children: React.ReactNode
}

const ValuesCard = ({ title, children, imga }: ValuesCardProps) => {
  return (
      <div>
        <Card variant='outlined' style={{width: 350, height: 250, position: 'absolute'}}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={7}>
                <Typography variant='h6' style={{textTransform: 'uppercase'}}>
                  {title}
                  <img style={{width: 20}} src={imga}></img>
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant='body2'>
                {children}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
      </div>  
  );
}

export default ValuesCard;
