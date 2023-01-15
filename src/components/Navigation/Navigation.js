import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className='navBar'>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                <li className='links'>Accueil</li>
            </NavLink>

            <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                <li className='links'>A Propos</li>
            </NavLink>
        </ul>
    );
};

export default Navigation;