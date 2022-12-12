import React from 'react';

export default function DetailView() {

    const { id } = useParams();

    const [api, setApi] = useState(`https://www.freetogame.com/api/game?id=${id}`);
    console.log(api);
    const [detail, setDetail] = useState();
    useEffect(() => {


        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((DetailRes) => {
                setDetail(DetailRes);
                console.log(DetailRes);
            });

    }, [api]);


    return (
        <div>DetailView</div>
    );
}
