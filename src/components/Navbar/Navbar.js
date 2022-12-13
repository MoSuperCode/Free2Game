import './Navbar.css';
import React from 'react';
import Logo from '../../assets/img/Logo.svg';

export default function Navbar() {

    return (
        <nav className="navbarFlex">
            <div className="flex">
                <img className='logo' src={Logo} alt="s"></img>
                <h1 className='NavbarTitle'>FREE2GAME</h1>
            </div>
            <input className='input' placeholder='🔎' style={{ textAlign: 'right' }} ></input>
        </nav >
    );
}
