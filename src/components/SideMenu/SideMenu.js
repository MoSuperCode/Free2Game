import './SideMenu.css';
import Homepic from '../../assets/img/Home.png';
import Controller from '../../assets/img/Controller.png';
import controls from '../../assets/img/controls.png';

import React from 'react';
import { Link } from 'react-router-dom';

export default function SideMenu() {
    return (
        <side className="sideMenu">
            <Link to="/" ><img src={Homepic}></img></Link>
            <Link to="/allgames" ><img src={Controller}></img></Link>
            <Link to="/" ><img src={controls}></img></Link>
        </side>
    );
}
