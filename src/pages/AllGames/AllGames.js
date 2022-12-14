import { useEffect, useState } from "react";

import GameCard from "../../components/GameCard/GameCard.js";

function AllGames() {
    const [plm, setP] = useState("all");
    const [category, setC] = useState("mmorpg");
    const [sort, setSort] = useState("alphabetical");

    const [add, setAd] = useState();
    const [api, setApi] = useState(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);

    useEffect(() => {
        console.log(api);
        console.log(sort);
        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((sortAdded) => {
                setAd(sortAdded);
                console.log(sortAdded);
            });
    }, [api, sort, plm, category]);

    if (add === undefined) {
        return;
    }
    return (
        <span className="mainContainer">
            <div className="Fbtn">
                <details className="SortBtn1">
                    <summary>Sort by</summary>
                    <button onClick={() => {

                        setP(`pc`);
                        setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);


                    }}>PC</button>
                    <button onClick={() => {

                        setP("browser");
                        setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);


                    }}>Browser</button>
                    <button onClick={() => {
                        setP("all");
                        setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);

                    }}>All</button>

                </details>
                <details className="SortBtn2">
                    <summary>Sort by</summary>
                    <button onClick={() => {

                        setSort(`alphabetical`);
                        setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);


                    }}>A-Z</button>
                    <button onClick={() => {

                        setSort("release-date");
                        setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);


                    }}>Release-date</button>
                    <button onClick={() => {
                        setSort("popular");
                        setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);

                    }}>Popularity</button>

                </details>



                    <details className="SortBtn3">
                        <summary>GERNES</summary>

                        <button onClick={() => {
                            setC("shooter");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Shooter</button>
                        <button onClick={() => {
                            setC("strategy");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Strategy</button>
                        <button onClick={() => {
                            setC("moba");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Moba</button>
                        <button onClick={() => {
                            setC("mmorpg");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Mmorpg</button>
                        <button onClick={() => {
                            setC('racing');
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Racing</button>
                        <button onClick={() => {
                            setC("sports");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Sports</button>
                        <button onClick={() => {
                            setC("social");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Social</button>
                        <button onClick={() => {
                            setC("sandbox");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Sandbox</button>
                        <button onClick={() => {
                            setC("open-world");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Open-world</button>
                        <button onClick={() => {
                            setC("survival");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Survival</button>
                        <button onClick={() => {
                            setC("pvp");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>PvP</button>
                        <button onClick={() => {
                            setC("pve");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>PvE</button>
                        <button onClick={() => {
                            setC("pixel");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Pixel</button>
                        <button onClick={() => {
                            setC("voxel");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Voxel</button>
                        <button onClick={() => {
                            setC("zombie");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Zombie</button>
                        <button onClick={() => {
                            setC("turn-bases");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Turn-based</button>
                        <button onClick={() => {
                            setC("first-person");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>First-person</button>
                        <button onClick={() => {
                            setC("third-person");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Third-Person</button>
                        <button onClick={() => {
                            setC("top-down");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Top-down</button>
                        <button onClick={() => {
                            setC("tankt");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Tank</button>
                        <button onClick={() => {
                            setC("space");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Space</button>
                        <button onClick={() => {
                            setC("sailing");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Sailing</button>
                        <button onClick={() => {
                            setC("superhero");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Superhero</button>
                        <button onClick={() => {
                            setC("permadeath");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Permadeath</button>
                        <button onClick={() => {
                            setC("battle-royale");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Battle-Royale</button>
                        <button onClick={() => {
                            setC("mmo");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Mmo</button>
                        <button onClick={() => {
                            setC("mmofps");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Mmofps</button>
                        <button onClick={() => {
                            setC("mmotps");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Mmotps</button>
                        <button onClick={() => {
                            setC("3d");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>3d</button>
                        <button onClick={() => {
                            setC("2d");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>2d</button>
                        <button onClick={() => {
                            setC("anime");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Anime</button>
                        <button onClick={() => {
                            setC("fantasy");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Fantasy</button>
                        <button onClick={() => {
                            setC("sci-fi");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Sci-Fi</button>
                        <button onClick={() => {
                            setC("fighting");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Fighting</button>
                        <button onClick={() => {
                            setC("action-rpg");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Action-RPG</button>
                        <button onClick={() => {
                            setC("action");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Action</button>
                        <button onClick={() => {
                            setC("military");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Military</button>
                        <button onClick={() => {
                            setC("martial-arts");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Martial-Arts</button>
                        <button onClick={() => {
                            setC("flight");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Flight</button>
                        <button onClick={() => {
                            setC("low-spec");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Low-Spec</button>
                        <button onClick={() => {
                            setC("tower-defense");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Tower-Defense</button>
                        <button onClick={() => {
                            setC("horror");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Horror</button>
                        <button onClick={() => {
                            setC("mmorts");
                            setApi(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`);
                        }}>Mmorts</button>
                    </details>

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