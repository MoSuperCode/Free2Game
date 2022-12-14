import { useEffect, useState } from "react";

import GameCard from "../../components/GameCard/GameCard";

function AllGames() {

    const [add, setAd] = useState();
    const [api, setApi] = useState(`https://www.freetogame.com/api/games`);

    useEffect(() => {


        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((sortAdded) => {
                setAd(sortAdded);
                console.log(sortAdded);
            });

    }, [api]);


    const [search, setSearch] = useState('');
    if (add === undefined) {
        return;
    }
    return (
        <main>
            <input onChange={(e) => setSearch(e.target.value)} className='input' placeholder='🔎' style={{ textAlign: 'right' }}  ></input>
            <span className="mainContainer">
                <div className="SortBtn">
                    <button onClick={() => {
                        AllGames(
                            setApi(`https://www.freetogame.com/api/games?sort-by=alphabetical`));
                    }}>A-Z</button>
                    <button onClick={() => {
                        AllGames(
                            setApi(`https://www.freetogame.com/api/games?sort-by=release-date`));
                    }}>Release-date</button>
                    <button onClick={() => {
                        AllGames(
                            setApi(`https://www.freetogame.com/api/games?sort-by=popularity`));
                    }}>Popularity</button>

                    <button onClick={() => {
                        AllGames(
                            setApi("https://www.freetogame.com/api/games?category=shooter"));
                    }}>SHOOTER</button>

                </div>


                <div className="cardContainer">

                    {add.filter((item) => {
                        return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
                    }).map((item, index) => {
                        return (
                            <GameCard key={index} thumbnail={item.thumbnail} title={item.title} genre={item.genre} platform={item.platform} id={item.id} />
                        );
                    })}
                </div>
            </span>
        </main>
    );
}

export default AllGames;