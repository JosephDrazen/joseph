import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TextBlock extends React.Component {

  render() {
    return (
      <div class="header-container" id="container">
        <h1 class="body-subtitle"> About </h1>
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
    );
  }
}

export default TextBlock;
