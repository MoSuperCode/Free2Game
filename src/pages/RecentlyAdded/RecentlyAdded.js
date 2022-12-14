import React, { useState, useEffect } from 'react';
import GameCard from '../../components/GameCard/GameCard';
function RecentlyAdded() {
    const [added, setAdded] = useState([]);
    // eslint-disable-next-line
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
        // eslint-disable-next-line
    }, []);


    return (
        <section className='Radd'>
            <div className='bg2'>
            
            </div>
            {
                added.map((item, index) => {
                    return (
                        <GameCard key={index} thumbnail={item.thumbnail} title={item.title} genre={item.genre} platform={item.platform} id={item.id} />
                    );
                })
            }
        </section>
    );




}

export default RecentlyAdded;
