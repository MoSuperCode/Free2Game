import "./GameCard.css";

import React from 'react';

export default function GameCard(props) {
    return (
        <div>
            <img src={props.src}></img>
            <h2>{props.title}</h2>
            <p>{ }</p>

        </div>
    );
}
