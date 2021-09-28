import React, {useState} from 'react';
import Sidebar from './SideBar'
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

const Navigation = (props) => {
    const [showSidebar, setSidebar] = useState(false)

    const changeSidebar = () => {
        setSidebar((prevState) => !prevState)
    }
    return (
        <nav>
            <div className="navigation">
                <div className='headerName'>Sheifunmi</div>

                <ul>
                    <li onClick={()=>props.scrollToRef(props.about)}>About</li>
                    <li onClick={()=>props.scrollToRef(props.project)}>Projects</li>
                    <li><Link to={{pathname:"https://drive.google.com/file/d/10JaQbY9hlxb-gvgBJ83PNN1uRC2AlTdM/view?usp=sharing"}}  target='_blank' ><span className="resume">Resume</span></Link></li>
                    <li onClick={()=>props.scrollToRef(props.contact)}>Contact</li>
                </ul>
                <span onClick={changeSidebar} className="barIcon"><i className="fa fa-bars"></i></span>


            </div>
            <Sidebar
                className="sidebar"
                changeSidebar = {changeSidebar}
                showSidebar = {showSidebar}
                scrollToRef = {props.scrollToRef}
                contact = {props.contact}
                about = {props.about}
                project = {props.project}
            />
        </nav>
    )
}

export default Navigation
