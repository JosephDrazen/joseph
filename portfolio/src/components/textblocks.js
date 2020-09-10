import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TextBlock extends React.Component {

  render() {
    return (
      <div class="hello-block">
        <div class="header-container" id="container">
          <h1 class="body-subtitle"> Hello </h1>
          <span id="body-text">Hi, I'm Joseph, a </span>
          <span id="intro">computer science undergraduate.</span>
          <p id="body-text">Spot me at SurveyMonkey as a Quality Assurance Intern.</p>

          <a href="https://github.com/JosephDrazen/" id="body-text" target="_blank" class="intro-link">
            I like to tinker with code on
            <FontAwesomeIcon icon="{['fab', 'github']}" class="fab fa-github"/>,
          </a>
          <a href="https://www.linkedin.com/in/josephmalovic/" id="body-text" class="intro-link" target="_blank">
            and you can chat with me on
            <i class="fab fa-linkedin-in">
            </i>.
          </a>
          <p>I built this website to present my ideas, projects,
            and other work in a minimalistic and straightforward design.</p>
          <div class="learning-container">
            <div class="enjoy-coding">
            <p>I enjoy coding in:</p>
              <ul>
                <li><code>JS</code></li>
                <li><code>Java</code></li>
                <li><code>Python</code></li>
              </ul>
            </div>
            <div class="currently-learning">
            <p>I'm currently learning some:</p>
              <ul>
                <li><code>React</code></li>
                <li><code>GraphQL</code></li>
              </ul>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#171717" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,192C480,171,600,85,720,74.7C840,64,960,128,1080,144C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    );
  }
}

export default TextBlock;
