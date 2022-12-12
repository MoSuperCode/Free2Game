import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard/GameCard';
function RecentlyAdded() {
    const [added, setAdded] = useState([]);
    const [api, setApi] = useState('https://www.freetogame.com/api/games?sort-by=release-date');

    useEffect(() => {


        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((sortAdded) => {
                setAdded(sortAdded);
                console.log(sortAdded);
            });

    }, []);

    return (
        <section>
            <div>
                <img src='https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='asd' ></img>
            </div>
            {
                added.map((item, index) => {
                    return (
                        <GameCard key={index} thumbnail={item.thumbnail} title={item.title} genre={item.genre} platform={item.platform} />
                    );
                })
            }
        </section>
    );




}

export default RecentlyAdded;
