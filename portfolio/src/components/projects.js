import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div class="projects-container">
        <h1 class="body-subtitle">Projects</h1>
        <ul>
          <li id="body-text"><a href="https://github.com/JosephDrazen/greenhouse" class="project-body-link" target="_blank">IoT Greenhouse</a>: a lesson in automation with Python & a Rasberry Pi</li>
          <li id="body-text"><a href="https://famcarenow.tech" class="project-body-link" target="_blank">famcarenow</a>: a web app for mental health family caregivers</li>
        </ul>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#171717" fill-opacity="1" d="M0,320L1440,128L1440,320L0,320Z"></path></svg>
      </div>
    );
  }
}

export default Projects;
