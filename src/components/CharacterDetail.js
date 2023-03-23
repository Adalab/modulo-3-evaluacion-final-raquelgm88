import { Link } from "react-router-dom";
import alive from '../images/heart-pulse-solid.svg';
import dead from '../images/skull-crossbones-solid.svg';
import gryffindor from '../images/gryffindor.png';
import ravenclaw from '../images/ravenclaw.png';
import hufflepuff from '../images/hufflepuff.png';
import slytherin from '../images/slytherin.png';

const CharacterDetail = ({characterFind}) => {

    const status = () => {
        if(characterFind.alive === true) {
            return <img className="alive" src={alive} alt="vivo/a"/>;
        }else{
            return <img className="dead" src={dead} alt="muerto/a"/>;
        }
    };

    const hogwarts = () => {
        if(characterFind.house === "Gryffindor") {
            return <img className="hogwarts" src={gryffindor} alt="Gryffindor"/>;
        }if (characterFind.house === "Ravenclaw") {
                return <img className="hogwarts" src={ravenclaw} alt="Ravenclaw"/>;
        }if (characterFind.house === "Hufflepuff") {
            return <img className="hogwarts" src={hufflepuff} alt="Hufflepuff"/>;
        }if (characterFind.house === "Slytherin") {
                return <img className="hogwarts" src={slytherin} alt="Slytherin"/>;
        }
    };

    return (
        <div className="detail">
            <Link to={"/"}>
                <input type="button" value="Volver"/>
            </Link>
            <article>
                <img src={characterFind.image} alt="" />
                <h3>{characterFind.name}</h3>
                <p>Casa: {hogwarts()}</p>
                <p>Especie: {characterFind.species}</p>
                <p>Género: {characterFind.gender}</p>
                <p>Estatus: {status()}</p>
                <p >Nombres alternativos: {characterFind.alternate_names}</p>
            </article>
        </div>
    );
};

export default CharacterDetail;