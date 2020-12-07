import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import SiteTitle from './components/Title.js'
import ReactMarkdown from 'react-markdown';
import WelcomeMd from './content/welcome.md'

class App extends React.Component {

  // nice grey : #1a202c

  constructor(props) {
    super(props);
    this.state = {content: ''}
  }

  componentWillMount() {
    fetch(WelcomeMd).then((response) => response.text()).then((text) => {
      this.setState({ content: text })
      console.log(this.state.content)
    })
  }
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3} style={{background:'#24305E' }}>
   
        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ alignItems: 'center', background: 'A8D0E6' }}>
            <SiteTitle />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ alignItems: 'center', background: '#A8D0E6' }}>
            <div style={{color:'#424242', textAlign: 'left', marginLeft: 300}} >
            <ReactMarkdown source={this.state.content}/>
            </div>
        </ParallaxLayer>

      </Parallax>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
export default App;