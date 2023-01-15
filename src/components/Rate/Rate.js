import React from 'react';

//svg
import greyStar from "../../assets/img/greyStar.svg"
import redStar from "../../assets/img/redStar.svg"

const Rate = ({ stars }) => {

    // to attribute how much give stars 
    const StarsIcon = [1, 2, 3, 4, 5];

    return (
        <>

            {StarsIcon.map((star) =>

                stars >= star ? (
                    <img
                        src={redStar}
                        alt="rating"
                        key={star.toString()}
                    />
                ) :
                    <img
                        src={greyStar}
                        alt="rating"
                        key={star.toString()}
                    />
            )}

        </>
    );
};

export default Rate;