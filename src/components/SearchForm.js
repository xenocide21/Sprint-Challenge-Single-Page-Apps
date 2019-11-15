import React from "react";

export default function SearchForm({search,setSearch,characters,data}) {

    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleChange = e => {
        const value = e.target.value;
        setSearch(value);
        data(characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase())));
    };

    return (
        <section className="search-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Character Search"
                    name="searchValue"
                    onChange={handleChange}
                    value={search}
                />
            </form>
        </section>
    );
}