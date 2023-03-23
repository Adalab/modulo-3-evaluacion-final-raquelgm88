import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import {matchPath, Route, Routes, useLocation} from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';

import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import video from '../images/Flight_Through_Clouds_rotating_2x_forward.mp4'



function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [house, setHouse] = useState('gryffindor');
  const [gender, setGender] = useState('todos')
  const [message, setMessage] = useState('');
  

  useEffect(() => {
    callToApi(house).then((response) => {
      setData(response);
    });
  }, [house]);

  const filterName = data.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(search.toLowerCase());
  });

  // const filterGender= data.filter((eachCharacter) => {
  // if( gender === "todos") {
  //   return true;
  // }else {
  //   return gender === eachCharacter.gender;
  // }
  //   });

  const handleFilter = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    notFound();
  };

  const handleHouse = (event) => {
    setHouse(event.target.value);
  };

  const handleGender = (event) => {
  //   setGender(event.target.value);
   };

  const notFound = () => {
    if(filterName.length === 0) {
      setMessage(
        <div>
          <p>No hay ningún personaje que coincida con la palabra {search}</p>
        </div>
      )
    }else if(filterName.length !== 0){
      setMessage('');
    }
  }

  const {pathname} = useLocation();
  const dataUrl = matchPath('/character/:id', pathname);
  const characterId = dataUrl !== null ? dataUrl.params.id : null;
  const characterFind = filterName.find((eachCharacter) => eachCharacter.id === characterId);

  return (
    <>
      <Header/>
      <main>
        <video className="video" autoplay="true" loop="true" muted="true">
          <source src={video}/>
        </video>
        <Routes>
          <Route path="/" element={
            <>
              <Filters handleFilter={handleFilter} search={search} handleHouse={handleHouse} handleGender={handleGender}/>
              <CharacterList data={data} search={search} message={message}/>
            </>
          }>
          </Route>
          <Route path="/character/:id" element={<CharacterDetail characterFind={characterFind}/>}/>
        </Routes>
      </main>
    </>);
};

export default App;
