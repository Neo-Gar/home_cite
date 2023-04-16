import React, {Component, useState} from 'react';

import burger_img from "../img/test-photo.jpg"
import {FaRegEdit} from "react-icons/fa";

class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            base_img_path: '../img/'
        }
    }

    componentDidMount() {
    fetch("http://localhost:3010/api/food")
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

    render() {
        return (
            <div className="food">
                <div className="main-block">
                    <div className="main-block-text-container">
                        <h1>Еда</h1>
                        <p>То, что нас объединяет</p>
                    </div>
                </div>
                <div className="food-items-grid">
                    {this.state.data.map(item =>
                    <div className="food-item" key={item.id}>
                        <div className="food-item-text">
                            <h2>{item.header}</h2>
                            <p>{item.description}</p>
                        </div>
                        <div className="food-item-img-wrap">
                            <img className="food-item-img" src={require('../img/' + item.img_name)} alt="Error"/>
                        </div>
                        <button className="btn-edit"><FaRegEdit/></button>
                    </div>)}
                </div>
            </div>
        );
    };
}

export default Food;
