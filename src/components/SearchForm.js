import React, {useEffect, useState} from "react";
import axios from 'axios'

export default function SearchForm({ onSearch }) {

    const [searchName, setSearchName] = useState([]);
    useEffect(()=>{
       axios
           .get(`https://rick-api.herokuapp.com/api/character/${searchName}`)
           .then( r => {
               console.log(r.data.results);
               setSearchName(r.data.results);
           })
    });
    const handleInputChange = (e) => {
        e.preventDefault();
        setSearchName(e.target.value)
    };

    return (
        <section className="search-form">
            <form onSubmit={() => {onSearch(searchName)} }>
                <input
                    onChange={handleInputChange}
                    placeholder="search"
                    value={searchName}
                    name="name"
                />
                <button type="submit">Search</button>
            </form>
        </section>
    );
}