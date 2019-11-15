import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

const LocationList = () => {

    const [state, setState] = useState([]);
    //api call not working?? no data displayed in console.
    useEffect(() => {
        axios.get("https://rick-api.herokuapp.com/api/location/")
            .then(r => {
                console.log(r.data.results);
                setState(r.data.results);
            })
            .catch(err =>
                console.log(err))
    }, []);

    return (
        <section className="location-list">
            <div>
                {state.map((location) =>{
                    return <LocationCard
                        key={location.id}
                        name={location.name}
                        type={location.type}
                        dimension={location.dimension}
                    />
                })}
            </div>
        </section>
    );
};

export default LocationList;