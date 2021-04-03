import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '../css/contacts.css'
import {Link} from 'react-router-dom'

const Contacts = (props) => {

    return (
        <div ref={props.refProp} >
                <div className="contacthead"><span>Contact Me</span></div>
                <div className="contactBody">
                <div className="contact-info">Interested in working together? wherever you are with your idea or your project, I'll be happy to help. I am open to new stuff.
                </div>
                <List>
                    <ListItem>
                        <ListItemContent className="listitemcontent">
                            <i className="fa fa-envelope fa-2x" aria-hidden="true"/>
                            seyiewebajo@gmail.com
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent className="listitemcontent" >
                            <i className="fa fa-phone-square fa-2x" aria-hidden="true"/>
                            08179058217
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent className="listitemcontent">
                            <i className="fa fa-map-marker fa-2x" aria-hidden="true"/>
                            Bariga, Lagos, Nigeria
                        </ListItemContent>
                    </ListItem>

                </List>
                <div className="logos">

            <Link to={{pathname:"https://twitter.com/sheifunmi_"}}  target='_blank' >
            <i  className="fa fa-twitter awesomeLogos" aria-hidden="true"/>
            </Link>

            <Link to={{pathname:"https://github.com/Ewebajo-Oluwaseyi"}}  target='_blank' >
            <i  className="fa fa-github-square awesomeLogos" aria-hidden="true"/>
                </Link>

            <Link to={{pathname:"linkedin.com/in/ewebajo-oluwaseyi-1444b9144"}}  target='_blank' >
            <i  className="fa fa-linkedin awesomeLogos" aria-hidden="true"/>
            </Link>

            </div>
                </div>
            <footer><span>copyright &#169; 2021, ewebajo oluwaseyi</span></footer>
        </div>
    )
}

export default Contacts
