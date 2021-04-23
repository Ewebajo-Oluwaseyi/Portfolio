import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '../css/contacts.css'
import {Link} from 'react-router-dom'

const Contacts = (props) => {

    return (
        <div ref={props.refProp} className="contact" >
                <div className="contacthead"><span>Contact Me</span></div>
                <div className="contactBody">
                <div className="contact-info">Interested in working together? wherever you are with your idea or your project, I'll be happy to help. I am open to new stuff.
                </div>
                <div className="listitem">
                        <div className="listitemcontent">
                            <div className="contact_icon">
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            </div>
                            <p>seyiewebajo@gmail.com</p>

                        </div>

                        <div className="listitemcontent" >
                            <div className="contact_icon">
                            <i className="fa fa-phone-square fa-2x" aria-hidden="true"/>
                            </div>
                            <p>08179058217</p>
                        </div>

                </div>

                </div>
            <footer>
            <div className="logos">

<Link to={{pathname:"https://twitter.com/sheifunmi_"}}  target='_blank' >
<i  className="fa fa-twitter" aria-hidden="true"/>
</Link>

<Link to={{pathname:"https://github.com/Ewebajo-Oluwaseyi"}}  target='_blank' >
<i  className="fa fa-github-square" aria-hidden="true"/>
    </Link>

<Link to={{pathname:"linkedin.com/in/ewebajo-oluwaseyi-1444b9144"}}  target='_blank' >
<i  className="fa fa-linkedin" aria-hidden="true"/>
</Link>

</div>
                <span>copyright &#169; 2021, ewebajo oluwaseyi</span></footer>
        </div>
    )
}

export default Contacts
