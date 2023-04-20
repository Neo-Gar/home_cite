import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";

import logo from './img/logo.png'

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Notes from "./components/Notes";

import './css/reset.css'
import './App.css'
import './css/Header.css'
import './css/Home.css'
import './css/Footer.css'
import './css/Food.css'
import './css/Notes.css'


class App extends Component {
  render() {
    return (
        <div className="App">
            <Header logo={logo}/>
            <main>
                <Routes>
                    <Route path="*" element={<Home title="Домашний Сайт"/>} />
                    <Route path="/food" element={<Food title="Еда"/>} />
                    <Route path="/notes" element={<Notes title="Записки"/>} />
                </Routes>
            </main>
            <Footer logo={logo}/>
        </div>
    );
  }
}

export default App;
