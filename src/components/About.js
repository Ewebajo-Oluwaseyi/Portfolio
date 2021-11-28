import React from 'react';
import '../css/about.css';

const About = (props) => {

    return (
        <div ref={props.refProp} className="aboutBody">
            <div className="skills_tools_div">
                <div className="about_div">
                    <span className="about_me">ABOUT ME</span>
                    <div className="about_info info">
                        I'm a Web Developer based in Lagos, Nigerian. I focus on creating user‑friendly websites with preference to the React.js framework. I am proficient in HTML and CSS also, and I have built some other simple projects with JavaScript and SASS. I'm passionate and motivated in taking on any challenges.
                        when building or cloning web projects, I strongly adhere to Responsive Design, Great UI/UX & Accessibility  and Reusable & minimal code principles which makes my websites both unique and scaleable.
                        In my spare time, I love to watch movies and listen to R&B music.
                    </div>
                </div>
            </div>
            <div className="divisor"></div>
        </div>
    )
}

export default About
