import React, {useRef, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import './css/preloader.css'
import Navigation from './components/Nav'
import Landingpage from './components/landingpage';
import About from './components/About'
import Contacts from './components/contacts';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {
  const about = useRef(null)

  const contact = useRef(null)

  const project = useRef(null)

  const skill = useRef(null)

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


  useEffect(() => {
    document.title = "Sheifunmi Portfolio";
    window.scrollTo(0, 0);
   // window.onload = function(){
     // document.getElementById("preloader").classList.add("off")
    //};
  }, [])
  return (
    <div>
      {/*<div id="preloader" className="preloader">
        <div class="black_wall"></div>
        <div class="loader"></div>
      </div>*/}
      <Router>
        <div className="App">
          <Navigation scrollToRef= {scrollToRef}
            contact = {contact}
            about = {about}
            project = {project}
            skill={skill}
          />
          <Landingpage scrollToRef= {scrollToRef} about = {about}/>
          <About refProp={about}/>
          <Skills refProp={skill}/>
          <Projects refProp={project}/>
          <Contacts refProp={contact}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
