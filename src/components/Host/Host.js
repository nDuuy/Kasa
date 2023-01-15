import React from 'react';

const Host = ({ hostName, hostPic }) => {
    return (
        <>
            <h2 className='host-name'>{hostName}</h2>
            <img src={hostPic} alt={hostName} />
        </>
    );
};

export default Host;