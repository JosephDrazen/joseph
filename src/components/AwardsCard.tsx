import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { useSpring, animated as a } from 'react-spring'

type AwardsCardProps = {
  title: string
  name: string
  date: string
  children: React.ReactNode
}

const AwardsCard = ({ title, children, name, date }: AwardsCardProps) => {

  const [flipped, setFlipped] = useState(false)
  
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => {return (`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`); }
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 1, tension: 1000, friction: 40 }
  })

  return (
    <React.Fragment>
      <CardActionArea>
      <div onClick={() => setFlipped(state => !state)}>
        <a.div style={{opacity: opacity.interpolate(o => 1 - o), transform: props.xys.interpolate(trans)}}
              onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
              onMouseLeave={() => set({ xys: [0, 0, 1] })}>
          <Card variant='outlined' style={{width: 250, height: 250, position: 'absolute'}}>
            <CardContent>
              <Typography variant='h6' style={{textTransform: 'uppercase'}}>{title}</Typography>
              <Typography variant='body1'>Presented By: {name}</Typography>
              <Typography variant='body1'>{date}</Typography>
            </CardContent>
          </Card>
        </a.div>
        <a.div style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), transform: props.xys.interpolate(trans) }}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
        >
          <Card variant='outlined' style={{width: 250, height: 250, position: 'absolute'}}>
            <CardContent>
              <Typography variant='body2'>{children}</Typography>
            </CardContent>
          </Card>
        </a.div>
      </div>
      </CardActionArea>
    </React.Fragment>
  
  );
}

export default AwardsCard;
