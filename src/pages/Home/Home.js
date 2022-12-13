import React, { useEffect, useState } from 'react';
import './Home.css';
import lol from '../../assets/img/LOL.png';
import GameCard from '../../components/GameCard/GameCard';

export default function Home() {
    const [api, setApi] = useState('https://www.freetogame.com/api/games?sort-by=release-date');
    const [array, setArray] = useState([]);

    useEffect(() => {
        fetch(api)
            .then((response) => (response.json()))
            .then((recentGames) => {
                setArray(recentGames);
            });

    }, [api]);
    const recentlyAddedGames = array.slice(0, 4);
    return (
        <div className='Home'>
            <section className='Hero'>
                <img className='HeroPic' src={lol} ></img>
                <h1 className='HeroTitle'>Find & track the best free-to-play games!</h1>
            </section>

            <section className='Recently Added'>
                <h2>Recently Added</h2>
                <div className='homeRecentlyAddedFlexContainer'>
                    {recentlyAddedGames.map((game, index) => {
                        return <GameCard key={index} thumbnail={game.thumbnail} title={game.title} short_description={game.short_description} platform={game.platform} genre={game.genre} id={game.id} />;
                    })}
                </div>
            </section>
            <section className='Top4Pc'></section>
            <section className='Top4Browser'></section>
        </div>
    );
};
