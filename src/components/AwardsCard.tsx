import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

type AwardsCardProps = {
  title: string
  name: string
  date: string
  children: React.ReactNode
}

const AwardsCard = ({ title, children, name, date }: AwardsCardProps) => {


  return (
    <React.Fragment>
      <CardActionArea>
        <Card variant='outlined' style={{width: 550, height: 300, 
          position: 'absolute',
          color: '#fff', backgroundColor: '#2c364a'
        }}
        >
          <CardContent>
            <Typography variant='body1'>Presented By: <br />{name}</Typography>
            <Typography variant='body1'>{date}</Typography>
            <br />
            <Typography variant='body2'>{children}</Typography>
            <br />
            <Typography variant='h5' style={{textTransform: 'uppercase'}}>{title}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </React.Fragment>
  
  );
}

export default AwardsCard;
