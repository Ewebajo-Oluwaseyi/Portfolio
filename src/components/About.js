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
                <span className="about_me">SKILLS & TOOLS</span>
            </div>
            <div className="skill_grid">
                <div className="skin_item">
                    <div className="image_box">
                        <img src={react} alt="logo" />
                        <p>REACT JS</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={javascript} alt="logo" />
                        <p>JAVASCRIPT</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={redux} alt="logo" />
                        <p>REDUX</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={node} alt="logo" />
                        <p>NODE JS</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={mongo} alt="logo" />
                        <p>mongoDB</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={sql} alt="logo" />
                        <p>MYSQL</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={html} alt="logo" />
                        <p>HTML5</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={css} alt="logo" />
                        <p>CSS3</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={bootstrap} alt="logo" />
                        <p>BOOTSTRAP</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={sass} alt="logo" />
                        <p>SASS</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={material} alt="logo" />
                        <p>Material UI</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={github} alt="logo" />
                        <p>GITHIB</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={heroku} alt="logo" />
                        <p>HEROKU</p>
                    </div>
                </div>
                <div className="skin_item">
                    <div className="image_box">
                        <img src={netlify} alt="logo" />
                        <p>NETLIFY</p>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default About
