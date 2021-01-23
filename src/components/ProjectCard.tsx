import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
}

const ProjectCard = ({ link, title, children }: ProjectCardProps) => {
  return (
      <div>
        <Card variant='outlined' style={{width: 270, height: 270, position: 'absolute', color: '#fff', backgroundColor: '#2c364a'}}>
          <CardContent>
            <Typography variant='h5' style={{textTransform: 'uppercase'}}>
              {title}
            </Typography>
            <Typography variant='body2'>
              {children}
            </Typography>
            <Typography variant='body2'>
              View it on:
              <IconButton href={link} target='_blank'>
                <GitHubIcon/>
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </div>  
  );
}

export default ProjectCard;