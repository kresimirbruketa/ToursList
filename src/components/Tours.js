import React, {useEffect, useState} from "react";
import axios from "axios";
import Tour from "./Tour";

function Tours() {

    const [tours,setTours] = useState([]);

    async function fetchData() {
        try {
            const response = await axios.get("https://course-api.com/react-tours-project");
            const result = response.data;
            setTours(result)

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {fetchData();}, []);

    function deleteTour(id) {
        // konstanta u koju se sprema novi array i uspoređuje jel id od kliknutog toura
        // jednak id-u u originalnom arrayu i onda ga mice i kreira novi array u kojem 
        // taj tour (s tim idem) ne postoji
        const newTourArrays = tours.filter((tour) => {
            return (tour.id !== id)
        })
        setTours(newTourArrays);
    }

    function loopItems(tour) {
        return (<Tour
            key={tour.id}
            id={tour.id}
            call={tour.name}
            desc={tour.info}
            img={tour.image}
            money={tour.price}
            onDelete={deleteTour}/>)
    }

    if (tours.length === 0){
        return(
            <section>
                <div className="title">
                <h2>No tours left</h2>
                <div className="underline"></div>
                <button className="btn" onClick={fetchData}>Refresh</button>
                </div>
            </section>
        )
    }

    return (
        <section>
            <div className="title">
                <h2>Our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map(loopItems)}
            </div>
        </section>

    )
}

export default Tours;