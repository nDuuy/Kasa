import React, { useState } from 'react';

import vectorUpDown from "../../assets/img/vector-up-down.svg"

const AccordionHouse = ({ description, aboutTitle }) => {

    // by default all active class is off 
    const [active, setActive] = useState(false)

    // arrow function for toggle active class
    const activeToggle = (e) => {

        // if true the class change 
        setActive(!active)
    }

    return (
        <>
            <div className={`accordion-house ${active && "active"}`}>
                <div className=" accordion-title-house"
                    onClick={activeToggle}>{aboutTitle}
                    <span >
                        <img src={vectorUpDown} alt="" className='accordion_icon' />
                    </span>
                </div>

                <div className="accordion-content-house"
                    onClick={activeToggle}>{description}
                </div>
            </div>
        </>
    );
};

export default AccordionHouse;