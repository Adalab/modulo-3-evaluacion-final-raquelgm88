import { Link } from "react-router-dom";
import alive from '../images/heart-pulse-solid.svg';
import dead from '../images/skull-crossbones-solid.svg';

const CharacterDetail = ({characterFind}) => {

    const status = () => {
        if(characterFind.alive === true) {
            return <img className="alive" src={alive} alt="vivo/a"/>;
        }else{
            return <img className="dead" src={dead} alt="muerto/a"/>;
        }
    };

    return (
        <>
            <Link to={"/"}>
                <input type="button" value="Volver"/>
            </Link>
            <article>
                <img src={characterFind.image} alt="" />
                <h3>{characterFind.name}</h3>
                <p>Casa: {characterFind.house}</p>
                <p>Especie: {characterFind.species}</p>
                <p>Género: {characterFind.gender}</p>
                <p>Estatus: {status()}</p>
                <p >Nombres alternativos: {characterFind.alternate_names}</p>
            </article>
        </>
    );
};

export default CharacterDetail;