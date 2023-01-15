import React from 'react';

const HomeCard = ({ cover, title }) => {
    return (
        <article className='appart-card'>
            <img src={cover} alt={title} className='thumb-img' />
            <div className="appart-name-container">
                <p className="appart-name">{title}</p>
            </div>
        </article>
    );
};

export default HomeCard;