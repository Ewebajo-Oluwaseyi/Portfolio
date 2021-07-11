import React, {useRef, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import './css/preloader.css'
import Navigation from './components/Nav'
import Landingpage from './components/landingpage';
import About from './components/About'
import Contacts from './components/contacts';
import Projects from './components/projects';


function App() {
  const about = useRef(null)

  const contact = useRef(null)

  const project = useRef(null)

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


  useEffect(() => {
    /*var div=document.createElement("div");
    div.id="preloader"
    div.className="preloader"
    div.innerHTML='<div class="black_wall"></div><div class="loader"></div>'
    document.body.insertBefore(div,document.body.firstChild)*/
    window.onload = function(){document.getElementById("preloader").classList.add("off")};
  }, [])
  return (
    <div>
      <div id="preloader" className="preloader">
        <div class="black_wall"></div>
        <div class="loader"></div>
      </div>
      <Router>
        <div className="App">
          <Navigation scrollToRef= {scrollToRef}
            contact = {contact}
            about = {about}
            project = {project}
          />
          <Landingpage scrollToRef= {scrollToRef} about = {about}/>
          <About refProp={about}/>
          <Projects refProp={project}/>
          <Contacts refProp={contact}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
