import React from 'react';
import Pages from './pages'
import {Link} from 'react-router-dom'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import style from './layout.module.css'

function layout() {
    return (
        <div className="demo-big-content">
    <Layout>
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
            <Pages/>
        </Content>
    </Layout>
</div>
    )
}

export default layout
