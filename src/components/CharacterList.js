import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Search from './SearchForm'

const CharacterList = () => {

    const [char, setChar] = useState([]);
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    let x=[];
    useEffect(() => {
        (async()=> {
            let r = await axios.get("https://rick-api.herokuapp.com/api/character/")
            x = r.data.results;
            setChar(x);
            setData(x);
        })();
    }, []);

    return (
        <section className="character-list">
            <Search search={search} setSearch={setSearch} characters={char} data={setData}/>
            <div id="cards">
                {data.map((char) =>{
                    return <CharacterCard
                        key={char.id}
                        name={char.name}
                        species={char.species}
                        status={char.status}
                        img={char.image}
                        origin={char.origin.name}
                    />
                })}
            </div>
        </section>
    );
};

export default CharacterList;