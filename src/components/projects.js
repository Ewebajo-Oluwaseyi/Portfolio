import React from 'react';
import '../css/project.css'

const Projects = (props) => {


    return (
        <div ref={props.refProp} className="projectBody">
            <div className="projectHead"><span>Projects</span></div>
            <div className="projectGrid">
                <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/food.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/FoodApp" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://sfood-app.herokuapp.com" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Food App</h5>
                </article>
                <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/shoe.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Shoe-store-Ecommerce-website" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://sheifunmi-shoe.herokuapp.com/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Shoe E-commerce App</h5>
                </article>

                <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/smarthub.png" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/SmartHub" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://oluwaseyi-smarthub.netlify.app/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">SmartHub Landing Page</h5>
                </article>

                <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/lay.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Responsive-Layout" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://ewebajo-oluwaseyi.github.io/Responsive-Layout/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Responsive-Layout</h5>
                </article>

                <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/quidaxbook.png" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Quidax-book" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://quidax-sheifunmi.netlify.app/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">GraphQL Book Store </h5>
                </article>

                <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/bluecube.png" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Blue-cube" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://blue-cube.vercel.app/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Bluecube with Unsplash Api</h5>
                </article>

                <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/laptop.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Laptop-landing-page" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://buylaptop-landing-page.netlify.app/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Buy Laptop Landing Page</h5>
                </article>

                <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/restaurant.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/RestaurantFrontPage-Gatsby" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://restaurantfrontpage-gatsby.netlify.app/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Gatsby-Restaurant Landing Page</h5>
                </article>

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

                <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/cal.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/simple-interest-calculator-javascript" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://simpleinterestcal.netlify.app/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">JavaScript Simple Interest Calculator</h5>
                </article>

            </div>
            <div className="divisor"></div>
        </div>
    )
}

export default Projects
