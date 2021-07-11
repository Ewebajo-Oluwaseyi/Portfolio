import React, {useState, useEffect} from 'react'
import { Cell, Grid } from 'react-mdl';
import '../css/landingpage.css'
import img from '../image/img1.jpg';
import ReactTypingEffect from 'react-typing-effect'
import {Link} from 'react-router-dom'

const Landingpage = (props) => {

    const [greetings, setGreetings] = useState('')

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();

        if(hour < 12) {
            return setGreetings (<div className="greetings">HI THERE!<span>Good Morning!</span> </div>)
        }
        if(hour >= 12 && hour < 17) {
            return setGreetings (<div className="greetings">HI THERE!<span>Good Afternoon!</span> </div>)
        }
        else {
            return setGreetings (<div className="greetings">HI THERE!<span>Good Evening!</span> </div>)
        }
    }, [])
    return (
        <div className="landingpage">
            <div className="landing_grid">
                <div  className="profile_grid_item">

                    <img src={img} alt='Avatar' className="myAvatar"/>
                </div>
                <div className="profile_grid_item about">
                    <div className="profile_name">{greetings} </div>
                    <div className="name">I'm <span>Ewebajo Oluwaseyi</span></div>
                    <div className="typing-effect">
                    <ReactTypingEffect
                        text = {["<A Web Developer/>"]}
                        />
                    </div>
                    <button
                    onClick={()=>props.scrollToRef(props.about)} className="moreBtn">
                        More about me <span><i  className="fa fa-arrow-right ArrowRight"/></span>
                    </button>
                </div>

            </div>
            {/*<div><i  className="fa fa-arrow-down fa-3x ArrowDown" aria-hidden="true"/></div>*/}
        </div>
    )
}

export default Landingpage
