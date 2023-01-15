import React from 'react';
import { NavLink } from 'react-router-dom';

const E404 = () => {
    return (
        <div className='main-container-error'>
            <h1 className='error-title'>404</h1>
            <br />
            <h2 className='error-txt'>Oups! La page que vous demandez n'existe pas.</h2>
            <br />
            <NavLink to="/" className={(nav) => (nav.isActive ? "return-txt-active " : "")} >
                <p className='return-txt'>Retourner sur la page d’accueil</p>
            </NavLink>
        </div>
    );
};

export default E404;