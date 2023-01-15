import React from 'react';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';
import Header from '../components/Header/Header';

const home = () => {
    return (
        <>
            <Header />
            <main>
                <Gallery />
            </main>
            <footer className='footer'>
                <Footer />
            </footer>
        </>
    );
};

export default home;