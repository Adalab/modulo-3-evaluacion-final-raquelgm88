import {Link} from 'react-router-dom';
const CharacterCard = ({eachCharacter, index}) => {
    return (
  <li key={index} id={eachCharacter.id} className="li">
    <Link to={`/character/${eachCharacter.id}`}>
        <img src={eachCharacter.image} alt="personaje" className='li__img'/>
        <h3 className='li__name'>{eachCharacter.name}</h3>
        <p className='li__specie'>{eachCharacter.species}</p>
      </Link>
    </li>
    );
};
export default CharacterCard;