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
                    <img src="image/todo.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Todo" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://6063387b841948009dbf2b8f--seyi-todo.netlify.app/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                  <h5 className="projectText">Todo App</h5>
                </article>
                <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/shopping.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Shoppinglist-JavaScript" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://shoppinglist-javascript.herokuapp.com/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">JavaScript Shoppinglist</h5>
                </article>

                <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/workers.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/WorkersInformationKeeper" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://quiet-beyond-33272.herokuapp.com/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Workers Infor Keeper</h5>
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
                    <img src="image/food.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/FoodApp" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://apricot-crisp-41919.herokuapp.com/order" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Food App</h5>
                </article>

                <article className="projectItem">
                <div className="projectContainer">
                    <img src="image/layout.PNG" className="projectImage" alt=""/>
                    <button className="link1">
                        <a href="https://github.com/Ewebajo-Oluwaseyi/Responsive-Layout" target="_blank" rel="noreferrer">
                        <i  className="fa fa-github" aria-hidden="true"/>View Code
                        </a>
                    </button>
                    <button className="link2">
                        <a href="https://6058f2f4c2c89535cb6a2424--reponsivelayout.netlify.app/" target="_blank" rel="noreferrer">
                        View Website
                        </a>
                    </button>
                </div>
                <h5 className="projectText">Responsive Layout</h5>
                </article>

            </div>
            <div className="divisor"></div>
        </div>
    )
}

export default Projects
