import React, { useEffect, useRef } from 'react';
import '../css/project.css'
import { gsap } from 'gsap';

const Projects = (props) => {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;

        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
            },
          });
          
          tl.from(".project1", { y: 400, opacity: 0, duration: 1.5 })
            .from(".project2", { y: 400, opacity: 0, duration: 1.5 }, "-=1.5")
            .from(".project3", { y: 400, opacity: 0, duration: 1.5 }, "-=1.7")
            .from(".project4", { y: 400, opacity: 0, duration: 1.5 }, "-=1.9")
            .from(".project5", { y: 400, opacity: 0, duration: 1.5 }, "-=2.1")
            .from(".project6", { y: 400, opacity: 0, duration: 1.5 }, "-=2.3")
            .from(".project7", { y: 400, opacity: 0, duration: 1.5 }, "-=2.5")
            .from(".project8", { y: 400, opacity: 0, duration: 1.5 }, "-=2.7")
            .from(".project9", { y: 400, opacity: 0, duration: 1.5 }, "-=2.9")
    },[])
    

    return (
        <div ref={props.refProp} className="projectBody">
            <div className="projectHead"><span>Projects</span></div>
            <div className="projectGrid" ref={ref}>
            <article className="projectItem project1">
                <div className="projectContainer">
                    <img src="image/pyroecom.png" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Pyroecom" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://pyroecom.vercel.app/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">PYROECOM</h5>
                <div className="projectTool">
                    <p>Vue JS</p>
                    <p>TailWind css</p>
                    <p>Vuex</p>
                </div>
            </article>
            <article className="projectItem project1">
                <div className="projectContainer">
                    <img src="image/slodge.png" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Lodge-Room" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://slodge.netlify.app/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Slodge</h5>
                <div className="projectTool">
                    <p>React JS</p>
                    <p>TypeScript</p>
                    <p>Context API</p>
                </div>
            </article>
            <article className="projectItem project1">
                <div className="projectContainer">
                    <img src="image/chat-room.png" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Chat-room" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://chat-room-theta.vercel.app/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Chat-Room</h5>
                <div className="projectTool">
                    <p>React JS</p>
                    <p>TypeScript</p>
                    <p>Supabase</p>
                </div>
            </article>
                <article className="projectItem project1">
                <div className="projectContainer">
                    <img src="image/food.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Food-Ordering-App" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://sfood-app.herokuapp.com" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Food App</h5>
                <div className="projectTool">
                    <p>React JS</p>
                    <p>SASS</p>
                    <p>Node JS</p>
                    <p>Redux</p>
                </div>
                </article>
               {/**  <article className="projectItem project2">
                <div className="projectContainer">
                    <img src="image/shoe.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Shoe-store-Ecommerce-website" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://sheifunmi-shoe.herokuapp.com/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Shoe E-commerce App</h5>
                <div className="projectTool">
                    <p>React JS</p>
                    <p>SASS</p>
                    <p>Node JS</p>
                    <p>Redux</p>
                </div>
                </article>
                */}
                <article className="projectItem project3">
                <div className="projectContainer">
                    <img src="image/s-coin.png" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/S-Coin" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://s-coin.vercel.app/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">S-Coin</h5>
                <div className="projectTool">
                    <p>React JS</p>
                    <p>SASS</p>
                    <p>Bootstrap</p>
                    <p>Redux</p>
                </div>
                </article>

                {/**
                <article className="projectItem project3">
                <div className="projectContainer">
                    <img src="image/fixer.png" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Fixer" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://fixer.vercel.app/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Fixer (Currency Converter)</h5>
                <div className="projectTool">
                    <p>React JS</p>
                    <p>Bootstrap</p>
                </div>
                </article>
                 */}
                 {/** 
                <article className="projectItem project3">
                <div className="projectContainer">
                    <img src="image/smarthub.png" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/SmartHub" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://oluwaseyi-smarthub.netlify.app/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">SmartHub Landing Page</h5>
                <div className="projectTool">
                    <p>React JS</p>
                    <p>CSS</p>
                </div>
                </article>
                */}

                {/** <article className="projectItem project4">
                <div className="projectContainer">
                    <img src="image/lay.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Responsive-Layout" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://ewebajo-oluwaseyi.github.io/Responsive-Layout/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Responsive-Layout</h5>
                <div className="projectTool">
                    <p>React JS</p>
                    <p>SASS</p>
                    <p>Bootstrap</p>
                    <p>Redux</p>
                </div>
                </article>

                <article className="projectItem project5">
                <div className="projectContainer">
                    <img src="image/quidaxbook.png" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Quidax-book" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://quidax-sheifunmi.netlify.app/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">GraphQL Book Store </h5>
                <div className="projectTool">
                    <p>React JS</p>
                    <p>GraphQL</p>
                    <p>CSS</p>
                    <p>Context API</p>
                </div>
                </article>

                <article className="projectItem project6">
                <div className="projectContainer">
                    <img src="image/bluecube.png" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Blue-cube" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://blue-cube.vercel.app/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Bluecube with Unsplash Api</h5>
                <div className="projectTool">
                    <p>React JS</p>
                    <p>SASS</p>
                </div>
                </article>

                <article className="projectItem project7">
                <div className="projectContainer">
                    <img src="image/laptop.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Laptop-landing-page" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://buylaptop-landing-page.netlify.app/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Buy Laptop Landing Page</h5>
                <div className="projectTool">
                    <p>HTML</p>
                    <p>JavaScript</p>
                    <p>CSS</p>
                    <p>Redux</p>
                </div>
                </article>

                <article className="projectItem project8">
                <div className="projectContainer">
                    <img src="image/restaurant.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/RestaurantFrontPage-Gatsby" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://restaurantfrontpage-gatsby.netlify.app/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Gatsby-Restaurant Landing Page</h5>
                <div className="projectTool">
                    <p>Gatsby</p>
                    <p>React JS</p>
                    <p>Styled Components</p>
                </div>
                </article>*/}

               {/* <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/sunny.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Frontend-mentor-challenge-Sunnyside-agency-landing-page" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://oluwaseyi-sunnyside.netlify.app/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Frontend Mentor Challenge: Sunnyside Landing Page</h5>
    </article>*/}

                {/*<article className="projectItem">
                <div className="projectContainer">
                    <img src="image/pet.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Frontend-mentor-challenge-Sunnyside-agency-landing-page" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://protected-shelf-97954.herokuapp.com/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Adopt Pet With Vue JS/Node JS</h5>
</article>*/}

                <article className="projectItem project9">
                <div className="projectContainer">
                    <img src="image/cal.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/simple-interest-calculator-javascript" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true" style={{ "marginRight": "5px" }}/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://simpleinterestcal.netlify.app/" target="_blank" rel="noreferrer">
                        <i  className="fas fa-globe" aria-hidden="true" style={{ "marginRight": "5px" }}/>
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">JavaScript Simple Interest Calculator</h5>
                <div className="projectTool">
                    <p>HTML</p>
                    <p>JavaScript</p>
                    <p>CSS</p>
                </div>
                </article>

            </div>
            <div className="divisor"></div>
        </div>
    )
}

export default Projects
