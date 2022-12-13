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
    if (add === undefined) {
        return;
    }
    return (
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

                {add.map((item, index) => {
                    return (
                        <GameCard key={index} thumbnail={item.thumbnail} title={item.title} genre={item.genre} platform={item.platform} id={item.id} />
                    );
                })}
            </div>
        </span>
    );
}

export default AllGames;