import React from 'react';
import {Link} from 'react-router-dom'
import '../css/Sidebar.css'


const SideBar = (props) => {
    console.log(props)
    return (
        <div className={props.showSidebar ? "sidebarContainer":"sidebarCOntainerShow"}>
            <ul>
                <li  onClick={()=>{props.scrollToRef(props.about)
                 props.changeSidebar()
                 }}>About</li>
                <li onClick={()=>{props.scrollToRef(props.project)
                 props.changeSidebar()
                 }}>Projects</li>
                <li><Link to={{pathname:"https://drive.google.com/file/d/1lW3Xv5QVL4AC72v2_IhrGvtb42RR76ak/view?usp=sharing"}}  target='_blank' >
                    <span className="resumesidebar" onClick={()=>{props.changeSidebar()
                 }}>Resume</span> </Link></li>
                <li onClick={()=>{props.scrollToRef(props.contact)
                 props.changeSidebar()
                 }}>Contact</li>
            </ul>
        </div>
    )
}

export default SideBar
