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
            <div className="projectHead"><span>Project</span></div>
            <div className="projectGrid">
                <div className="projectItem">

                <Card shadow={5} className="projectcard">
                <CardTitle  style={{marginTop: '20px', height: '150px',
                backgroundImage: 'url(image/todo.PNG)', backgroundSize: 'cover',
                backgroundPosition: 'center'}}>

                </CardTitle>
                <CardText style={{fontWeight: 'bold'}}>
                    A Todo App
                </CardText>
                <CardActions border>
                <a href="https://github.com/Ewebajo-Oluwaseyi/Todo" target="_blank" rel="noreferrer">
                <Button colored>GITHUB</Button>
                </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <a href="https://6063387b841948009dbf2b8f--seyi-todo.netlify.app/" target="_blank" rel="noreferrer">
                <IconButton name="share"/>
                </a>
                </CardMenu>
                </Card>
                </div>
                <div className="projectItem">
                <Card shadow={5} className="projectcard">
                <CardTitle style={{color: '#fff', height: '176px',
                backgroundImage: 'url(image/shopping.PNG)'}}>
                </CardTitle>
                <CardText>
                    A JavaScript Shoppinglist
                </CardText>
                <CardActions border>
                <a href="https://github.com/Ewebajo-Oluwaseyi/Shoppinglist-JavaScript" target="_blank" rel="noreferrer">
                <Button colored>GITHUB</Button>
                </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <a href="https://shoppinglist-javascript.herokuapp.com/" target="_blank" rel="noreferrer">
                <IconButton name="share"/>
                </a>
                </CardMenu>
                </Card>
                </div>
                <div className="projectItem">
                <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{marginTop: '20px', height: '150px',
                backgroundImage: 'url(image/workers.PNG)', backgroundSize: 'cover',
                backgroundPosition: 'center'}}>

                </CardTitle>
                <CardText>
                    Workers Information Keeper
                </CardText>
                <CardActions border>
                <a href="https://github.com/Ewebajo-Oluwaseyi/WorkersInformationKeeper" target="_blank" rel="noreferrer">
                <Button colored>GITHUB</Button>
                </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <a href="https://quiet-beyond-33272.herokuapp.com/" target="_blank" rel="noreferrer">
                <IconButton name="share"/>
                </a>
                </CardMenu>
                </Card>
                </div>
                <div className="projectItem">
                <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{marginTop: '20px', height: '150px',
                backgroundImage: 'url(image/book.PNG)', backgroundSize: 'cover',
                backgroundPosition: 'center'}}>

                </CardTitle>
                <CardText>
                    Book Store Log App
                </CardText>
                <CardActions border>
                <a href="https://github.com/Ewebajo-Oluwaseyi/Book-Store-Log" target="_blank" rel="noreferrer">
                <Button colored>GITHUB</Button>
                </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <a href="https://calm-badlands-14758.herokuapp.com/" target="_blank" rel="noreferrer">
                <IconButton name="share"/>
                </a>
                </CardMenu>
                </Card>
                </div>
                <div className="projectItem">
                <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{marginTop: '20px', height: '150px',
                backgroundImage: 'url(image/food.PNG)', backgroundSize: 'cover',
                backgroundPosition: 'center'}}>

                </CardTitle>
                <CardText>
                    A Food App
                </CardText>
                <CardActions border>
                <a href="https://github.com/Ewebajo-Oluwaseyi/FoodApp" target="_blank" rel="noreferrer">
                <Button colored>GITHUB</Button>
                </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <a href="https://apricot-crisp-41919.herokuapp.com/order" target="_blank" rel="noreferrer">
                <IconButton name="share"/>
                </a>
                </CardMenu>
                </Card>
                </div>
                <div className="projectItem">
                <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px',
                background: 'url(image/layout.PNG) center / cover'}}>

                </CardTitle>
                <CardText>
                    Responsive Layout Page
                </CardText>
                <CardActions border>
                <a href="https://github.com/Ewebajo-Oluwaseyi/Responsive-Layout" target="_blank" rel="noreferrer">
                <Button colored>GITHUB</Button>
                </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <a href="https://6058f2f4c2c89535cb6a2424--reponsivelayout.netlify.app/" target="_blank" rel="noreferrer">
                <IconButton name="share"/>
                </a>
                </CardMenu>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Projects
