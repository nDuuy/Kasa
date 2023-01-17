import React, { useState } from 'react';

import vectorUpDown from "../../assets/img/vector-up-down.svg"

const Accordion = ({ Title, description }) => {

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
                    onClick={activeToggle}>
                    {Title}
                    <span className={`arrowDropdown ${active}`} onClick={() => setActive(!active)} >
                        <img src={vectorUpDown} alt="" className='accordion-icon' />
                    </span>

                </div>

                <div className="accordion-content "
                    onClick={activeToggle}>{description}
                </div>
            </div>
        </>
    );
};

export default Accordion;


