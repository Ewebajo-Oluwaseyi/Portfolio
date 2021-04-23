import React from 'react';
import '../css/about.css';
import react from '../image/react.png'
import css from '../image/css.png'
import bootstrap from '../image/bootstrap.png'
import github from '../image/github.png'
import heroku from '../image/heroku.jpg'
import html from '../image/html.png'
import javascript from '../image/javascript.png'
import mongo from '../image/mongo.png'
import netlify from '../image/netlify.jpg'
import node from '../image/nodejs.jpg'
import redux from '../image/redux.png'
import sass from '../image/sass.png'
import sql from '../image/sql.png'
import vue from '../image/vue.png'
import material from '../image/material.png'




const About = (props) => {
    return (
        <div ref={props.refProp} className="aboutBody">
            <div className="skills_tools_div">
                <div className="about_div">
                <span className="about_me">ABOUT ME</span>
                <div className="about_info"> I'm a passionate and motivated Software developer with great passion for taking on challenges
                        , I spend a lot of time building client-side applicatons with preference to the React.js framework.</div>
                </div>

            <div className="about_skill">
                <span className="about_me">SKILLS & TOOLS</span>
            </div>
            <div className="skill_grid">
                <div className="skin_item">
                    <div className="image_box">
                        <i className="fab fa-react"></i>
                    </div>
                    <p className="text">REACT JS</p>
                </div>

                <div className="skin_item">
                <div className="image_box">
                        <i className="fab fa-js-square"></i>
                    </div>
                    <p className="text">JAVASCRIPT</p>
                </div>

                <div className="skin_item">
                <div className="image_box">
                    <img src={redux} alt="logo" />
                </div>
                    <p className="text">REDUX</p>
                </div>

                <div className="skin_item">
                <div className="image_box">
                <i className="fab fa-node-js"></i>
                </div>
                    <p className="text">NODE JS</p>
                </div>

                <div className="skin_item">
                    <div className="image_box">
                        <img src={mongo} alt="logo" />
                    </div>
                    <p className="text">mongoDB</p>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={sql} alt="logo" />
                    </div>
                    <p className="text">MYSQL</p>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                    <i class="fab fa-html5"></i>
                    </div>
                    <p className="text">HTML5</p>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                    <i class="fab fa-css3"></i>
                    </div>
                    <p className="text">CSS3</p>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                    <i class="fab fa-bootstrap"></i>
                    </div>
                    <p className="text">BOOTSTRAP</p>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={sass} alt="logo" />
                    </div>
                    <p className="text">SASS</p>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={material} alt="logo" />
                    </div>
                    <p className="text">Material UI</p>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                    <i class="fab fa-github"></i>
                    </div>
                    <p className="text">GITHIB</p>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={heroku} alt="logo" />
                    </div>
                    <p className="text">HEROKU</p>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={netlify} alt="logo" />
                    </div>
                    <p className="text">NETLIFY</p>
                </div>
            </div>
            </div>
            <div className="divisor"></div>
        </div>
    )
}

export default About
