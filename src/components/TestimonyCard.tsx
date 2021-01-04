import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';


type TestimonyProps = {
  name: string
  role: string
  children: React.ReactNode
}

const TestimonyCard = ({ name, role, children }: TestimonyProps) => {
  return (
      <div>
          <h1>{name}</h1>
          <h2>{role}</h2>
          <p>{children}</p>
      </div>  
  );
}

export default TestimonyCard;
