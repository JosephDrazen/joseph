/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// @ts-ignore
import AboutMDX from "../sections/about"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Values from './values'

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
        <div id='projects'/>
          <AboutMDX />
        <Typography variant='h5'>
        Spot me at CU Blueprint as a Product Designer. I like to tinker with code on  
        <IconButton color='inherit' style={{padding: 8}} href='https://github.com/JosephDrazen' target='_blank'>
          <GitHubIcon/>
        </IconButton>, 
        and you can chat with me on
        <IconButton color='inherit' style={{padding: 8}} href='https://www.linkedin.com/in/josephmalovic/' target='_blank'>
          <LinkedInIcon/>
        </IconButton>.
        In the past I've been a QA Engineer at SurveyMonkey, Enterprise Sales at Shopify, and eCommerce Coordinator at Best Buy.
        If you're an employer reading this site it is very likely I have 
        learned your values so I thought you'd be interested in learning about mine too:
        </Typography>
        <Values />
      </Inner>
    </Content>
  </div>
)

export default About
