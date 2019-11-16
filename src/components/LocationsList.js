import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

const LocationList = () => {

    const [location, setLocation] = useState([]);
    //api call not working?? no data displayed in console.
    useEffect(() => {
        let x=[];
        (async()=> {
            let r = await axios.get("https://rick-api.herokuapp.com/api/location/");
            console.log(r.data.results);
            x = r.data.results;
            setLocation(x);
        })();
    }, []);

    return (
        <section className="location-list">
            <div>
                {location.map((location) =>{
                    return <LocationCard
                        location={location}
                        key={location.id}
                        name={location.name}
                        type={location.type}
                        dimension={location.dimension}
                        residents={location.residents.length}
                    />
                })}
            </div>
        </section>
    );
};

export default LocationList;