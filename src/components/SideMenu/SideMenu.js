import './SideMenu.css';
import Homepic from '../../assets/img/Home.png';
import Controller from '../../assets/img/Controller.png';
import controls from '../../assets/img/controls.png';
import Hamburger from '../../assets/img/burger.png';

import React from 'react';
import { Link } from 'react-router-dom';

export default function SideMenu() {
    return (
        <div className='border'>
            <Link to=""><img alt='.' className='Hamburger' src={Hamburger}></img></Link>
            <div className="sideMenu">
                <Link to="/" ><img alt='.' src={Homepic}></img></Link>
                <Link to="/allgames" ><img alt='.' src={Controller}></img></Link>
                <Link to="/recentlyadded" ><img alt='.' src={controls}></img></Link>
            </div>
        </div>
    );
}
