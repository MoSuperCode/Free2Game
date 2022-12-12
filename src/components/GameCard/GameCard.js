import "./GameCard.css";

import React, { useState } from 'react';

export default function GameCard(props) {
    const [platformSrc, setPlatform] = useState("");
    if (props.platform === "Web Broser") {
        setPlatform("../../assets/img/Web.svg");
    } else if (props.platform === "PC (Windows)") {
        setPlatform("../../assets/img/Windows.svg");
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
                <img src={platformSrc}></img>
                <h3>{props.genre}</h3>
            </div>
        </div>
    );
}
