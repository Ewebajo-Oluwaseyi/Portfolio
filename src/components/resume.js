import React from 'react';
import { Grid, Cell} from 'react-mdl';
import style from './resume.module.css';
import Education from './education';
import Exprience from './exprience';
import Skills from './skills';
import Certificate from './certificate'


function resume() {
    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <div>
                        <img src="/image/img.jpg" alt="avatar" style={{height: '350px'}}/>
                    </div>
                    <h2 style={{paddingTop: '2em', color: '#833fb2'}}>Ewebajo Oluwaseyi</h2>
                    <p style={{color: 'grey'}}>Custom Order Officer</p>
                    <hr style={{borderTop: '2px solid #833fb2'}}/>
                    <p>
                        Using integrity, hard work and innovation to help individuals, teams and organization achieve 
                        an educated, healthy and sustainable society, while also seeking volunteer 
                        opportunities in youth empowerment and development.
                    </p>
                    <hr style={{borderTop: '2px solid #833fb2'}}/>
                    <h5>Address</h5>
                    <div style={{display: 'flex'}}>
                    <i style={{fontSize: '20px', paddingRight:'1rem'}} class="fa fa-map-marker" aria-hidden="true"/>
                    <p>10 Araromi street Shomolu</p>
                    </div>
                    <h5>Phone</h5>
                    <div style={{display: 'flex'}}>
                    <i style={{fontSize: '20px', paddingRight:'1rem'}} className="fa fa-phone-square" aria-hidden="true"/>
                    <p>08179058217</p>
                    </div>
                    <h5>Email</h5>
                    <div style={{display: 'flex'}}>
                    <i style={{fontSize: '20px', paddingRight:'1rem'}} className="fa fa-envelope" aria-hidden="true"/>
                    <p>seyiewebajo@gmail.com</p>
                    </div>
                    <h5>Linkedlin</h5>
                    <div style={{display: 'flex'}}>
                    <i style={{fontSize: '20px', paddingRight:'1rem'}} class="fa fa-linkedin"></i>
                    <p>linkedin.com/in/ewebajo-oluwaseyi-1444b9144</p>
                    </div>
                    <h5>Github</h5>
                    <div style={{display: 'flex'}}>
                    <i style={{fontSize: '20px', paddingRight:'1rem'}} class="fa fa-github-square"></i>
                    <p>https://github.com/Ewebajo-Oluwaseyi</p>
                    </div>
                    <hr style={{borderTop: '2px solid #833fb2'}}/>
                </Cell>
                <Cell col={8} className={style.resumeRightCol}>
                    <h2 style={{color: '#e22947'}}>Education</h2>
                    <Education 
                    startYear={2007}
                    endYear={2012}
                    schoolLevel="Secondary Education"
                    schoolName="Command Day Secondary School Ikeja"/>
                    <Education 
                    startYear={2012}
                    endYear={2017}
                    schoolLevel="Tertiary Education"
                    schoolName="Federal University Of Technology Akure"
                    schoolCourse="Physics Electronics"/>
                    <hr style={{borderTop: '2px solid #e22947'}}/>
                    <h2 style={{color: '#e22947'}}>Certificate</h2>
                    <Certificate
                    startYear="01/2010"
                    endYear="11/2012"
                    schoolCertificate="Senior School Leaving Certificate"/>
                    <Certificate
                    startYear="12/2012"
                    endYear="03/2018"
                    schoolCertificate="Bachelor of technology certificate in Physics and
                    Electronics with Second Class (HONS) Upper Division"/>
                    <Certificate
                    startYear="04/2018"
                    endYear="03/2019"
                    schoolCertificate="Certificate of National ServiceCertificate of National Service"/>
                    <hr style={{borderTop: '2px solid #e22947'}}/>
                    <h2 style={{color: '#e22947'}}>Exprience</h2>
                    <Exprience
                    startYear='04/2016'
                    endYear='10/2016'
                    workPlace='Radio Lagos/ Eko Fm'
                    workPostion='Engineering Intern'
                    workAchievements={<ul>
                        <li>
                        Learnt how to Transmit Radio signal and maintenance of
                        equipment used for transmission.
                        </li>
                        <li>
                        Maintenance of studio equipment.
                        </li>
                        <li>
                        Collaborated with the electrical engineers to work on the
                        building electrical facilities.
                        </li>
                    </ul>}/>
                    <Exprience
                    startYear='05/2018'
                    endYear='03/2019'
                    workPlace='Mall For Africa Limited'
                    workPostion='VAT Officer'
                    workAchievements={<ul>
                        <li>
                        Filling out merchants invoices daily on an Excel sheet.
                        </li>
                        <li>
                        Sorting hardcopy invoices into different stores.
                        </li>
                        <li>
                        Requesting merchants VAT invoices.
                        </li>
                        <li>
                        Creating a monthly VAT report.   
                        </li>
                    </ul>}/>
                    <Exprience
                    startYear='03/2019'
                    endYear='Present'
                    workPlace='Mall For Africa Limited'
                    workPostion='Custom Order Officer'
                    workAchievements={<ul>
                        <li>
                        Checking for customers' custom order requests, confirming
                        full understanding before addressing it.
                        </li>
                        <li>
                        Handle concerns quickly and escalated major issues to
                        supervisor.
                        </li>
                        <li>
                        Giving price quotes to customers within communicated
                        period and time.
                        </li>
                        <li>
                        Giving shopping advises and suggestions to customers via
                        email.
                        </li>
                        <li>
                        Monitoring and managing custom order transactions.
                        </li>
                    </ul>}/>
                    <hr style={{borderTop: '2px solid #e22947'}}/>
                    <h2 style={{color: '#e22947'}}>Skills</h2>
                    <Skills
                    Skill='HTML, CSS, JavaScript, React'
                    progress={50}/>
                    <Skills
                    Skill='Proficient in working with Microsoft professional office
                    package software (MS word)'
                    progress={80}/>
                    <Skills
                    Skill='Ability to work independently and as a team member'
                    progress={100}/>
                    <Skills
                    Skill='Time management and problem solving skills'
                    progress={90}/>
                    <Skills
                    Skill='Understanding of group and organizational dynamics'
                    progress={90}/>
                </Cell>
            </Grid>
        </div>
    )
}

export default resume
