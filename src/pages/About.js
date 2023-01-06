import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AboutContent from '../components/AboutContent/AboutContent'


const About = () => {
    return (
        <>
            <Header />
            <main>
                <AboutContent />
            </main>
            <footer className='footer'>
                <Footer />
            </footer>
        </>
    );
};

export default About;