import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from './components/header'
import TextBlock from './components/textblocks'
import Projects from './components/projects'
import Sidebar from './components/sidebar'

function App() {
  return (
    <div className="App">
    <Sidebar />
    <TextBlock />
    <Projects />
      <div class="boop"></div>
    </div>
  );
}

export default App;
