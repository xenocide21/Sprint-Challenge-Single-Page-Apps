import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Search from './SearchForm'
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '5%',
        flexGrow: 1,
    },
}));

const CharacterList = () => {

    const [char, setChar] = useState([]);
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        let x=[];
        (async()=> {
            let r = await axios.get("https://rick-api.herokuapp.com/api/character/");
            console.log(r.data.results);
            x = r.data.results;
            setChar(x);
            setData(x);
        })();
    }, []);

    const classes = useStyles();

    return (
        <section className="character-list">
            <Search search={search} setSearch={setSearch} characters={char} data={setData}/>
            <div className={classes.root}>
                {data.map((char) =>{
                    return <CharacterCard
                        key={char.id}
                        name={char.name}
                        species={char.species}
                        status={char.status}
                        image={char.image}
                        origin={char.origin.name}
                    />
                })}
            </div>
        </section>
    );
};

export default CharacterList;