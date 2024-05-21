import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to='home'> home</NavLink>
            <br/>
            <Link to='users'>Users</Link>
            <br/>
            <NavLink to='Posts'>Posts</NavLink>




        </div>
    );
};

export default Header;