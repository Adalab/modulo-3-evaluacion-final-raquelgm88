const CharacterCard = ({eachCharacter}) => {
    return (
<li id={eachCharacter.id} className="li">
        <img src={eachCharacter.image} alt="" className='li__img'/>
        <h3 className='li__name'>{eachCharacter.name}</h3>
        <p className='li__specie'>{eachCharacter.species}</p>
      </li>
    );
};
export default CharacterCard;