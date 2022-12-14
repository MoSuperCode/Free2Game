import './Navbar.css';
import React from 'react';
import { useEffect, useState } from "react";
import Logo from '../../assets/img/Logo.svg';
import GameCard from '../../components/GameCard/GameCard';

export default function Navbar() {

    /*     const [games, setGames] = useState([]);
        const [text, setText] = useState("");
        const [suggestions, setSuggestions] = useState();
        const [api, setApi] = useState(`https://www.freetogame.com/api/games`);
    
        useEffect(() => {
    
            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then((searchAdded) => {
                    setGames(searchAdded);
                    console.log(searchAdded);
                });
    
        }, [api]);
        const onSuggestHandler = (text) => {
            setText(text);
            setSuggestions([]);
        };
        const onChangeHandler = (text) => {
            let matches = [];
            if (text.length > 0) {
                matches = games.filter(games => {
                    const regex = new RegExp(`${text}`, "gi");
                    return games.title.match(regex);
                });
            }
            console.log(matches);
            setSuggestions(matches);
            setText(text);
        }; */


    return (
        <main>
            <nav className="navbarFlex">
                <div className="flex">
                    <img src={Logo} alt="s"></img>
                    <h1>FREE2GAME</h1>
                </div>
                <input  /* onChange={e => onChangeHandler(e.target.value)}  value={text}  */ className='input' placeholder='🔎' style={{ textAlign: 'right' }}  ></input>
                {/*   {suggestions && suggestions.map((suggestion, i) =>
                    <div key={i} onClick={() => onSuggestHandler(suggestion.title)} >

                        {suggestion.title}

                    </div>
                )} */}
            </nav >
        </main>

    );
}




/* { <section>
                {
                    games.map((item, index) => {
                        return (
                            <GameCard key={index} thumbnail={item.thumbnail} title={item.title} genre={item.genre} platform={item.platform} id={item.id} />
                        );
                    })
                }
            </section>  */



/* 
            <div>
                {
                    games.forEach((item, index) => {
                        return (
                            <GameCard key={index} thumbnail={item.thumbnail} title={item.title} genre={item.genre} platform={item.platform} id={item.id} />
                        );
                    })
                }
            </div> */