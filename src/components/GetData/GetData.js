//              [this is hook]
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeCard from '../HomeCard/HomeCard';
import { Link } from 'react-router-dom';

const GetData = () => {

    // for store data 
    const [data, setData] = useState([]);

    // useEffect take action when the component is mount and block the reapet action of react
    useEffect(() => {
        axios.get("/Data.json").then((result) => setData(result.data));
    }, []);

    return (
        <>
            {data.map((appart, id) => (

                // give unique key = id and path to data for each appart
                <Link className='linkToAppart' to={`/Data/${appart.id}`} key={id} >
                    {/*we give to the childs the key and the different setting with propos method */}
                    <HomeCard cover={appart.cover} title={appart.title} />
                </Link>
            ))
            }
        </>
    );
};

export default GetData;