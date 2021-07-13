import React from 'react';
import '../css/about.css';


const About = (props) => {
    return (
        <div ref={props.refProp} className="aboutBody">
            <div className="skills_tools_div">
                <div className="about_div">
                    <span className="about_me">ABOUT ME</span>
                    <div className="about_info">
                        I'm a Web Developer based in Lagos, Nigerian. I focus on creating user‑friendly websites with preference to the React.js framework. I am proficient in HTML and CSS also, and I have built some other simple projects with JavaScript and SASS. I'm passionate and motivated in taking on any challenges.
                        when building or cloning web projects, I strongly adhere to Responsive Design, Great UI/UX & Accessibility  and Reusable & minimal code principles which makes my websites both unique and scaleable.
                        In my spare time, I love to watch movies and listen to R&B music.
                    </div>
                </div>
                <hr className="seperator"/>
                <div className="about_skill">
                    <span className="about_me">MY STACK</span>
                </div>
                <div className="skill_grid">
                    <div className="skin_item">
                        <div className="image_box">
                            <i class="fab fa-html5 fa-4x"></i>
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
                            <i class="fab fa-sass"></i>
                        </div>
                        <p className="text">SASS</p>
                    </div>
                    <div className="skin_item">
                        <div className="image_box">
                            <i className="fab fa-react"></i>
                        </div>
                        <p className="text">REACT JS</p>
                    </div>
                    <div className="skin_item">
                        <div className="image_box">
                            <i className="fab fa-vuejs"></i>
                        </div>
                        <p className="text">VUE JS</p>
                    </div>
                    <div className="skin_item">
                        <div className="image_box">
                            <i className="fab fa-js-square"></i>
                        </div>
                        <p className="text">JAVASCRIPT</p>
                    </div>

               {/* <div className="skin_item">
                <div className="image_box">
                    <img src={redux} alt="logo" />
                </div>
                    <p className="text">REDUX</p>
                </div>*/}

                    <div className="skin_item">
                        <div className="image_box">
                        <i className="fab fa-node-js"></i>
                    </div>
                        <p className="text">NODE JS</p>
                    </div>

                {/*<div className="skin_item">
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
                </div>*/}
            </div>
            </div>
            <div className="divisor"></div>
        </div>
    )
}

export default About
