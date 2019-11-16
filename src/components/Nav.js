
import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div className="navigation">
                <div>
                    <NavLink to="/">Home Page</NavLink>
                </div>
                <div>
                    <NavLink to="/characters">Characters</NavLink>
                </div>
                <div>
                    <NavLink to="/location">Location</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;