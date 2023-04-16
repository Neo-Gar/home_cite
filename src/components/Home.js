import React, {Component} from 'react';

import food_img from '../img/eat-menu.jpg'
import notes_img from '../img/notes.jpg'
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="main-block">
                    <div className="main-block-text-container">
                        <h1>Мы - Семья</h1>
                        <p>По этому нам нужен этот сайт для взаимодействия</p>
                    </div>
                </div>
                <div className="nav-grid">
                    <div className="grid-item">
                        <div className="grid-item-text">
                            <h2>Еда</h2>
                            <p>Тут вы можете найти то, что лежит в холодильнике</p>
                        </div>
                        <div className="grid-item-img-wrap">
                            <Link to="/food">
                                <img className="grid-item-img img-anim" src={food_img} alt="Error"/>
                            </Link>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-text">
                            <h2>Записки</h2>
                            <p>Попробуйте оставить записки для своих близких</p>
                        </div>
                        <div className="grid-item-img-wrap">
                            <Link to="/notes">
                                <img className="grid-item-img img-anim" src={notes_img} alt="Error"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;