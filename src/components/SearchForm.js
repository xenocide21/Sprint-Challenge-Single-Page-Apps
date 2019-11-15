import React, {useState} from "react";

export default function SearchForm({ onSearch }) {

    const [searchName, setSearchName] = useState([]);

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