import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';
import Projects from '../content/projectCards.md'


const ProjectCard = () => {
    
    const [meem, setT] = React.useState(null);

      
    const getContent = () => {
        fetch(Projects)
        .then((text) => {
            setT(text)
            console.log(meem)
          })
    }
    // getContent();

        return (
            <div>
                <Projects />
            </div>
        )

}

export default ProjectCard;