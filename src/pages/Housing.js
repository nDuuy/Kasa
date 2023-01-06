import React from 'react';
import Apparts from '../components/Appartements/Apparts';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Housing = () => {
    return (
        <>
            <Header />
            <main>
                <Apparts />
            </main>
            <footer className='footer'>
                <Footer />
            </footer>
        </>
    );
};

export default Housing;