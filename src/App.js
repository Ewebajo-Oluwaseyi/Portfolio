import React, {useRef} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Navigation from './components/Nav'
import Landingpage from './components/landingpage';
import About from './components/About'
import Contacts from './components/contacts';
import Projects from './components/projects';
import Resume from './components/resume'
import style from './layout.module.css'

function App() {
  const about = useRef(null)

  const contact = useRef(null)

  const project = useRef(null)

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  return (
  <div>
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
    {/*<Layout>
        <Header className={style.headerColor}
        title={<Link to='/' style={{textDecoration: 'none', color: 'white'}}>
        Seyi's Portfolio
        </Link>} scroll>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contacts">Contacts</Link>
            </Navigation>
        </Header>
        <Drawer  title={<Link to='/' style={{textDecoration: 'none', color: 'black'}}>
        Seyi's Portfolio
        </Link>} >
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contacts">Contacts</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Switch>
                    <Route exact path='/' component={Landingpage}/>
                    <Route exact path='/contacts' component={Contacts}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route exact path='/resume' component={Resume}/>
            </Switch>
        </Content>
    </Layout>*/}
    </div>
    </Router>
  </div>
  );
}

export default App;
