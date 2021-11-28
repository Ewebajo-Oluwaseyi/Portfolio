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
                        <Link
                            to={{pathname:"mailto:seyiewebajo@gmail.com"}}
                        >
                          <div className="contact_icon">
                            <i className="fa fa-envelope fa-2x" aria-hidden="true"/>
                          </div>
                          <p>seyiewebajo@gmail.com</p>
                        </Link>
                    </div>

                    <div className="listitemcontent" >
                        <Link
                            to={{pathname:"tel: +2348179058217"}}
                        >
                          <div className="contact_icon">
                            <i className="fa fa-phone-square fa-2x" aria-hidden="true"/>
                          </div>
                          <p>+234 817 905 8217</p>
                        </Link>
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
                <span>&#169; Sheifunmi 2021</span>
        </footer>
            </div>
    )
}

export default Contacts
