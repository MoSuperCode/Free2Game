import { useEffect, useState } from "react";
import GameCard from "../components/GameCard/GameCard";



function AllGames() {

    const [add, setAd] = useState();
    const [api, setApi] = useState('https://www.freetogame.com/api/games');
    
        useEffect(() => {


        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((sortAdded) => {
                setAd(sortAdded);
                console.log(sortAdded);
            });

    }, []);
    if(add === undefined){
        return
    }
    return (
        <div className="cardContainer">
            
{add.map((item, index) =>{
                return(

<GameCard key={index} thumbnail={item.thumbnail} title={item.title} genre={item.genre} platform={item.platform} />

        )    })}
        
        </div>
    );
    
}
export default AllGames;