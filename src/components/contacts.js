import React from 'react';
import '../css/contacts.css'
import {Link} from 'react-router-dom'

const Contacts = (props) => {

    return (
        <div ref={props.refProp} className="contact" >
            <div className="contacthead">
                <span>Contact Me</span>
            </div>
            <div className="contactBody">
                <div className="contact-info">
                    Interested in working together? Feel free to get in touch with me. I am always open to discussing new projects. Wherever you are with your idea or your project.
                </div>
                <div className="listitem">
                    <div className="listitemcontent">
                        <div className="contact_icon">
                            <i className="fa fa-envelope fa-2x" aria-hidden="true"/>
                        </div>
                        <p>seyiewebajo@gmail.com</p>
                    </div>

                    <div className="listitemcontent" >
                        <div className="contact_icon">
                            <i className="fa fa-phone-square fa-2x" aria-hidden="true"/>
                        </div>
                            <p>+234 817 905 8217</p>
                    </div>
                </div>
               {/* <div>
                    <form class="contactform" name="contact" method="post" data-netlify="true" data-netlify-recaptcha="true">
                            <div class="contactform">
                                <div className="contactrow">
                                    <div className="contactflex">
                                        <div>
                                            <input type="text" name="name" placeholder="YOUR NAME" required/>
                                        </div>
                                        <div>
                                            <input type="email" name="name" placeholder="YOUR EMAIL" required/>
                                        </div>
                                        <div>
                                            <input type="text" name="name" placeholder="YOUR SUBJECT" required/>
                                        </div>
                                    </div>
                                    <div>
                                        <textarea name="message" placeholder="YOUR MESSAGE" required></textarea>
                                    </div>
                                    <button type="submit" class="submitBtn">Send Message</button>
                                </div>
                            </div>
                        </form>
               </div>*/}


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
                <span>copyright &#169; Ewebajo Oluwaseyi 2021</span>
        </footer>
            </div>
    )
}

export default Contacts
