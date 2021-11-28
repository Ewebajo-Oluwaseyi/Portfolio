import React, {useState} from 'react';
import Sidebar from './SideBar'
import '../App.css';

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
                    <li onClick={()=>props.scrollToRef(props.skill)}>Skill</li>
                    <li onClick={()=>props.scrollToRef(props.project)}>Projects</li>
                    <li onClick={()=>props.scrollToRef(props.contact)}>Contact</li>
                </ul>
                <div onClick={changeSidebar} className="barIcon">
                  <label>
                      <span></span>
                      <span></span>
                      <span></span>
                  </label>
                </div>
            </div>
            <Sidebar
                className="sidebar"
                changeSidebar = {changeSidebar}
                showSidebar = {showSidebar}
                scrollToRef = {props.scrollToRef}
                contact = {props.contact}
                about = {props.about}
                project = {props.project}
                skill = {props.skill}
            />
        </nav>
    )
}

export default Navigation
