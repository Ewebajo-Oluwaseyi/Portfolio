import React, {useState, useEffect} from 'react'
import '../css/landingpage.css'
import img from '../image/seyi.jpg';
import ReactTypingEffect from 'react-typing-effect'
import {Link} from 'react-router-dom'

const Landingpage = (props) => {

    const [greetings, setGreetings] = useState('');
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();

        if(hour < 12) {
            return setGreetings (<div className="greetings"><span>Good Morning! I'm </span> </div>)
        }
        if(hour >= 12 && hour < 17) {
            return setGreetings (<div className="greetings"><span>Good Afternoon! I'm </span> </div>)
        }
        else {
            return setGreetings (<div className="greetings"><span>Good Evening! I'm </span> </div>)
        };
    }, []);

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 250) {
            setScroll(true);
        } else setScroll(false)
    })
    return (
        <div className="landingpage">
            <div className="landing_grid">
                <div className="about">
                  <div className="profile_name">{greetings} </div>
                  <h1>Ewebajo Oluwaseyi<span>.</span></h1>
                  <div className="typing-effect">
                    <ReactTypingEffect
                        text = {["<A Web Developer/>"]}
                        />
                  </div>
                  <div className="links">
                    <Link
                    to={{pathname:"https://drive.google.com/file/d/1pmOV0NqZw8NVQIQU0AvRltadsEwa94f1/view?usp=sharing"}}  target='_blank' className="moreBtn">
                        Resume
                   </Link>
                  </div>
                </div>
                <div className="profile_grid_item">

                    <img src={img} alt='Avatar' className="myAvatar"/>
                </div>
            </div>
            <div className={scroll ? "socialScroll" : "social"}>
                  <Link to={{pathname:"https://twitter.com/sheifunmi_"}}  target='_blank' >
                    <i  className="fa fa-twitter" aria-hidden="true"/>
                  </Link>

                 <Link to={{pathname:"https://github.com/Ewebajo-Oluwaseyi"}}  target='_blank' >
                    <i  className="fa fa-github-square" aria-hidden="true"/>
                  </Link>

                  <Link to={{pathname:"https://linkedin.com/in/ewebajo-oluwaseyi-1444b9144"}}  target='_blank' >
                    <i  className="fa fa-linkedin" aria-hidden="true"/>
                  </Link>
                </div>
            <div class="bg-shapes">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {/*<div><i  className="fa fa-arrow-down fa-3x ArrowDown" aria-hidden="true"/></div>*/}
        </div>
    )
}

export default Landingpage
