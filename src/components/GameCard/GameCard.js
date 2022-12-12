import "./GameCard.css";
//import web from '../../assets/img/Web.svg';
import windows from '../../assets/img/Windows.png';
import web from '../../assets/img/Browser.png';
import React from 'react';

export default function GameCard(props) {
    let logoPlatform;
    if (props.platform === "Web Browser") {
        logoPlatform = web;

    } else if (props.platform === "PC (Windows)") {
        logoPlatform = windows;

    }
    return (
        <div className="gameCards">
            <img src={props.thumbnail}></img>
            <div>
                <h2>{props.title}</h2>
                <p>{props.short_description}</p>
                <button>Read More</button>
            </div>
            <div className="gameCardFlex">
                <img src={logoPlatform} ></img>
                <h3>{props.genre}</h3>
            </div>
        </div>
    );
}
