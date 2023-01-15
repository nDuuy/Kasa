import React from 'react';
import GetData from '../GetData/GetData';
import Section1Home from '../Section1Home/Section1Home';

const Gallery = () => {
    return (
        <div className="main-container">
            <Section1Home />
            <section className='gallery'>
                <GetData />
            </section>
        </div>
    );
};

export default Gallery;