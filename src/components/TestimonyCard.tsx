import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


type TestimonyProps = {
  name: string
  role: string
  children: React.ReactNode
}

const TestimonyCard = ({ name, role, children }: TestimonyProps) => {

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
        <div>
            <h1>{name}</h1>
            <h2>{role}</h2>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="View"
             
            />
            <Collapse in={checked}>
            <p>{children}</p>
            <br />
            </Collapse>
            <br />


        </div>  
  );
}

export default TestimonyCard;
