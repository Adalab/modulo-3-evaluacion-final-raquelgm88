import CharacterCard from "./CharacterCard";
import avatar from '../images/avatar.jpg';

const CharacterList = ({data, house, search}) => {
    const filterName = () => {
        return data.filter((eachCharacter) => {
          return eachCharacter.name.toLowerCase().includes(search.toLowerCase());
        }).map ((eachCharacter, index) => {
            if(eachCharacter.image === "") {
              eachCharacter.image = avatar;
            };
            return <CharacterCard key={index} eachCharacter={eachCharacter} house={house}/>
          });
      };
    
    return (
        <ul className='ul'>
            {filterName()}
        </ul>
    );
};
export default CharacterList;