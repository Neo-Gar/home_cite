import React, {Component} from 'react';
import {FaRegEdit} from "react-icons/fa";

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            base_img_path: '../img/'
        }
    }

    componentDidMount() {
    fetch("http://localhost:3010/api/notes")
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }
    render() {
        return (
            <div className="notes">
                <div className="main-block">
                    <div className="main-block-text-container">
                        <h1>Записки</h1>
                        <p>Лучший способ напомнить своим близким о том как вы их любите</p>
                    </div>
                </div>
                <div className="notes-grid">
                    {this.state.data.map(item =>
                    <div className="notes-item">
                        <div className="notes-item-text">
                            <h3>{item.header}</h3>
                            <p>{item.text}</p>
                        </div>
                        <div className="notes-item-bottom-container">
                            <div className="notes-item-autor">{item.author}</div>
                            <button className="btn-edit float-right"><FaRegEdit /></button>
                        </div>
                    </div>)}
                </div>
            </div>
        );
    }
}

export default Notes;