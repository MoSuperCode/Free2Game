import React, { useState, useEffect } from 'react';

export default function DetailView(props) {

    const [detail, setDetail] = useState();
    useEffect(() => {


        fetch(`https://www.freetogame.com/api/game?id=${props.id}`)
            .then((response) => {
                return response.json();
            })
            .then((DetailRes) => {
                setDetail(DetailRes);
                console.log(DetailRes);
            });

    }, []);






    return (
        <div>DetailView</div>
    );
}
