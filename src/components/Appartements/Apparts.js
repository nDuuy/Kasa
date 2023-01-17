import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Carrousel from '../Carrousel/Carrousel';
import Tag from '../Tag/Tag';
import Host from '../Host/Host';
import Rate from '../Rate/Rate';
import Accordion from '../Accordion/Accordion';


const Apparts = () => {

    // debugger

    // import useparams 
    const searchParam = useParams();

    // import usenavigate
    const navigate = useNavigate();

    // for store data 
    const [AppartChoosed, setAppartChossed] = useState();

    // useEffect take action when the component is mount
    useEffect(() => {

        // asyn function to get data 
        const getData = async () => {

            // wait to axios get data 
            const axiosResult = await axios.get("/Data.json");

            // use find to find id 
            const WhatApparARchoose = axiosResult.data.find(({ id }) => id === searchParam.id);

            axiosResult.data.map(() => setAppartChossed(WhatApparARchoose));

            // if the id not found send to error page
            if (WhatApparARchoose === undefined) {
                navigate("/Error", { state: { message: "error" } })
            }
        };
        getData();
        // disable this line 
        // eslint-disable-next-line
    }, []);// empty array for useEffect dont infinite reload 


    // carousel pics
    const carouselPics = AppartChoosed && AppartChoosed.pictures

    // tags
    const tags = AppartChoosed && AppartChoosed.tags

    // equipment 
    const equipement = AppartChoosed && AppartChoosed.equipments

    // give props for show equipements array
    const equipements = AppartChoosed && equipement.map((item, index) => (
        <li
            className="equipementList"
            key={index}>
            {item}
        </li>
    ));


    return (
        AppartChoosed && (
            <div className="appart-main-container" key={searchParam.id}>
                <Carrousel picSlide={carouselPics} />

                <section className="host-title-tags-container">
                    <div className="title-tags-container">
                        <div className="title-container">
                            <h1>{AppartChoosed.title}</h1>
                            <h2>{AppartChoosed.location}</h2>
                        </div>
                        <div className="tags-container">
                            {tags.map((tag) => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="rate-host-container">
                        <div className="host-container">
                            <Host hostName={AppartChoosed.host.name}
                                hostPic={AppartChoosed.host.picture}
                            />
                        </div>
                        <div className="rate-container">
                            <Rate stars={AppartChoosed.rating} />
                        </div>
                    </div>
                </section>

                <section className="equipement-container">
                    <>
                        <Accordion description={AppartChoosed.description} Title="Description" />
                        <Accordion description={equipements} Title="Équipements" />

                    </>
                </section>

            </div>
        )
    );
};

export default Apparts;