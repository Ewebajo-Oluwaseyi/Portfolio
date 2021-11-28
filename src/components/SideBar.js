import React from 'react';
import '../css/Sidebar.css'


const SideBar = (props) => {
    console.log(props)
    return (
        <div className={props.showSidebar ? "sidebarContainer":"sidebarCOntainerShow"}>
            <div className="sidebar">
                <div className="sideItem" onClick={()=>{props.scrollToRef(props.about)
                 props.changeSidebar()
                 }}>About</div>
                 <div className="sideItem" onClick={()=>{props.scrollToRef(props.skill)
                 props.changeSidebar()
                 }}>Skill</div>
                <div className="sideItem" onClick={()=>{props.scrollToRef(props.project)
                 props.changeSidebar()
                 }}>Projects</div>
                <div className="sideItem" onClick={()=>{props.scrollToRef(props.contact)
                 props.changeSidebar()
                 }}>Contact</div>
            </div>
        </div>
    )
}

export default SideBar
