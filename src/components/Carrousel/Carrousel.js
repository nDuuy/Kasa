import { useState } from "react";
import left from "../../assets/img/vector-left.svg";
import right from "../../assets/img/vector-right.svg";

const Carrousel = ({ picSlide }) => {

    //je définie l'index du premier slide à 0
    const [current, setCurrent] = useState(0);

    // longueur du tableau de slides
    const length = picSlide.length;

    // on repart au premier slide quand on arrive au dernier
    const nextPics = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    // on repart au dernier slide quand on est au premier
    const prevPics = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };



    return (
        <>
            <section className="carrousel-container">

                {/* Affichage des flèches seulement si length > 1 */}
                {length > 1 && (
                    <img src={left} alt="left_arrow"
                        onClick={prevPics}
                        className="left-arrow"
                    />
                )}

                {length > 1 && (
                    <img src={right} alt="right_arrow"
                        onClick={nextPics}
                        className="right-arrow"
                    />
                )}

                {picSlide.map((picSlide, index) => (

                    // mise en place du slider avec affichage conditionnel et 

                    <div key={index} className="pics-div" >

                        {index === current && <img src={picSlide} alt="appartements" className="pics-carousel" />}

                    </div>
                ))}
            </section>
        </>
    );
};

export default Carrousel;