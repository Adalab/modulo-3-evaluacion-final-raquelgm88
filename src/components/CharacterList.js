import CharacterCard from "./CharacterCard";
import avatar from '../images/avatar.jpg';

const CharacterList = ({data, search, message, gender}) => {
    let dataHtml = data.filter((eachCharacter) => {
      const selectedGender= gender === "todos" || gender === eachCharacter.gender;
      return selectedGender && eachCharacter.name.toLowerCase().includes(search.toLowerCase());
    }).sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }if (a.name < b.name) {
       return -1;
      }
        return 0;
    }).map ((eachCharacter) => {
        if(eachCharacter.image === "") {
          eachCharacter.image = avatar;
        };
        return <CharacterCard key={eachCharacter.id} eachCharacter={eachCharacter}/>
      })

    return (
      <>
        {message}
        <ul className='ul'>
            {dataHtml}
        </ul>
      </>
    );
};
export default CharacterList;