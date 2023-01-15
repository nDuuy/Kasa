import React from 'react';
import E404 from '../components/404/E404';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Error = () => {
    return (
        <>
            <Header />
            <main>
                <E404 />
            </main>
            <footer className='footer'>
                <Footer />
            </footer>

        </>
    );
};

export default Error;