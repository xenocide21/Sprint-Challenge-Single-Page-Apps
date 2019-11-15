import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get("https://rick-api.herokuapp.com/api/character/")
            .then(r => {
                console.log(r.data.results);
                setState(r.data.results);
            })
            .catch(err =>
                console.log(err))
    }, []);

    return (
        <section className="character-list grid-view">
            <div id="cards">
                {state.map((character) =>{
                    return <CharacterCard
                        key={character.id}
                        name={character.name}
                        species={character.species}
                        status={character.status}
                        image={character.image}
                        origin={character.origin.name}
                    />
                })}
            </div>
        </section>
    );
};

export default CharacterList;