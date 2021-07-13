import React, {useState} from 'react';
import {Grid, Cell, Tabs, Tab, Card, CardTitle,CardText,CardActions,CardMenu,Button,IconButton} from 'react-mdl'
import '../css/project.css'
import book from '../image/book.PNG';
import food from '../image/food.PNG'
import workers from '../image/workers.PNG'
import todo from '../image/todo.PNG'

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
                    <img src="image/book.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Book-Store-Log" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://calm-badlands-14758.herokuapp.com/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Book Store Logs</h5>
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

                <article className="projectItem">
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
                </article>

                <article className="projectItem">
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
                </article>

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
