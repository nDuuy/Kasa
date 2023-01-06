import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="footer-logo">
                <span className='k2'>k</span>
                <svg width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg" className='houseSvg2' >
                    <path d="M31.5322 35.842V48.4414L36.8731 45.2916V32.6921L31.5322 35.842Z" fill="#ffffff" />
                    <path d="M46.2658 20.4632L24.3496 7.67847L12.1944 0.637604L0.223389 21.5749L0.407555 41.2153L22.1396 54L24.3496 52.703V34.1744L34.1106 16.9428L44.0557 22.6866V41.2153L46.2658 39.9183V20.4632Z" fill="#ffffff" />
                </svg>
                <span className='s2'>s</span>
                <span className='a2'>a</span>
            </div>
            <div className="footer-txt">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </>
    );
};

export default Footer;