import { Link } from "react-router-dom";
import alive from '../images/heart-pulse-solid.png';
import dead from '../images/skull-crossbones-solid.png';
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
                <input className="return" type="button" value="Volver"/>
            </Link>
            <article className="detail__article">
                <img className="detail__article_img" src={characterFind.image} alt={characterFind.name} />
                <div className="detail__article_div">
                    <h3 className="detail__article_div-name">{characterFind.name}</h3>
                    <p className="detail__article_div-fact">Casa: {hogwarts()}</p>
                    <p className="detail__article_div-fact">Especie: {characterFind.species}</p>
                    <p className="detail__article_div-fact">Género: {characterFind.gender}</p>
                    <p className="detail__article_div-fact">Estatus: {status()}</p>
                    <p className="detail__article_div-fact">Nombres alternativos: {characterFind.alternate_names}</p>
                </div>
            </article>
        </div>
    );
};

export default CharacterDetail;