import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';


type TestimonyProps = {
  link: string
  title: string
  children: React.ReactNode
}

const Testimony = ({ link, title, children }: TestimonyProps) => {
  return (
      <div>
          {link}
          {title}
      </div>  
  );
}

export default Testimony;
