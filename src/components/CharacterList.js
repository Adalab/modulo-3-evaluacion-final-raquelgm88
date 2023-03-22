import CharacterCard from "./CharacterCard";
import avatar from '../images/avatar.jpg';

const CharacterList = ({data, search}) => {

    let dataHtml = data.filter((eachCharacter) => {
      return eachCharacter.name.toLowerCase().includes(search.toLowerCase());
    }).map ((eachCharacter) => {
        if(eachCharacter.image === "") {
          eachCharacter.image = avatar;
        };
        return <CharacterCard key={eachCharacter.id} eachCharacter={eachCharacter}/>
      })

    return (
        <ul className='ul'>
            {dataHtml}
        </ul>
    );
};
export default CharacterList;