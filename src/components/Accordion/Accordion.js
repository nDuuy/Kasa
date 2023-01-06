import React, { useState } from 'react';

const Accordion = ({ title, content }) => {

    // by default all active class is off 
    const [active, setActive] = useState(false)

    // arrow function for toggle active class
    const activeToggle = e => {

        // if true the class change 
        setActive(!active)
    }

    return (
        <>
            <div className={`accordion ${active && "active"}`}>
                <div className="accordion-title "
                    onClick={activeToggle}>{title}
                </div>

                <div className="accordion-content "
                    onClick={activeToggle}>{content}
                </div>
            </div>
        </>
    );
};

export default Accordion;


