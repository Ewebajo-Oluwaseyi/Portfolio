import React, {useState, useEffect} from 'react'
import { Cell, Grid } from 'react-mdl';
import '../css/landingpage.css'
import img from '../image/emoji.png';
import ReactTypingEffect from 'react-typing-effect'
import {Link} from 'react-router-dom'

const Landingpage = (props) => {

    const [greetings, setGreetings] = useState('')

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();

        if(hour < 12) {
            return setGreetings (<div className="greetings">Good Morning!</div>)
        }
        if(hour >= 12 && hour < 17) {
            return setGreetings (<div className="greetings">Good Afternoon!</div>)
        }
        else {
            return setGreetings (<div className="greetings">Good Evening!</div>)
        }
    }, [])
    return (
        <div className="landingpage">
                <div className="landing_grid">
                <div  className="profile_grid_item">
                    <img src={img} alt='Avatar'/>
                </div>
                <div className="profile_grid_item about">
                    <div className="profile_name">{greetings} </div>
                    <div className="name">I'm Ewebajo Oluwaseyi</div>
                    <div className="typing-effect">
                    <ReactTypingEffect
                        text = {["A Web Developer"]}
                    />
                    </div>

                    <p> I'm a passionate and motivated front-end developer with great passion for taking on challenges
                        , I spend a lot of time building client-side applicatons with preference to the React.js framework.</p>

                <div >

                <Link to={{pathname:"https://drive.google.com/file/d/1DrOIsjv6wdzd4wJZh94Z0BD_VMmMe2G1/view"}} className='resume' target='_blank' >
                <button className="btn btn-light waves-effect" type="button">My Resume</button>
                </Link>
                </div>
                </div>



                </div>

            {/*<Grid className={style.landingGrid}>
                <Cell col={12}>
                 <img src='/image/img.jpg' alt='Avatar' className={style.avatarImg}/>
                </Cell>
                <div className={style.banner}>
                <h1 className={style.bannerH1}>Ewebajo Oluwaseyi</h1>
                <h2 className={style.bannerH2}>WEB DEVELOPER</h2>
                <hr className={style.bannerHr}/>
                <p  className={style.bannerP}>HTML | CSS | Javascript | React </p>
                <div className={style.socialLinks}>
                    <a  href="https://www.linkedin.com/in/ewebajo-oluwaseyi/" target="_blank" rel="noreferrer">
                        <i style={{color: 'white', fontSize: '80px', padding: '8px'}} class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                    <a  href="https://github.com/Ewebajo-Oluwaseyi" target="_blank" rel="noreferrer">
                        <i style={{color: 'white', fontSize: '80px', padding: '8px'}} class="fa fa-github-square" aria-hidden="true"></i>
                    </a>
                </div>
                </div>
    </Grid>*/}

        <li onClick={()=>props.scrollToRef(props.about)}><i  className="fa fa-arrow-down fa-3x ArrowDown" aria-hidden="true"/></li>

        </div>

    )
}

export default Landingpage
