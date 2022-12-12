import { useEffect, useState } from "react";



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
    return (
        <div>
            <h1>{add.map((a, index) =>{
                return(
<div key={index}>
<h1>{a.id}</h1>
<h1>{a[0].id}</h1>
</div>
        )    })}</h1>
        
        </div>
    );
}
export default AllGames;