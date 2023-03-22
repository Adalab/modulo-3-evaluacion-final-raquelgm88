import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import {matchPath, Route, Routes, useLocation} from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';

import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';



function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [house, setHouse] = useState('gryffindor');

  useEffect(() => {
    callToApi(house).then((response) => {
      setData(response);
    });
  }, [house]);

  const filterName = data.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(search.toLowerCase());
  })

  const handleFilter = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const handleHouse = (event) => {
    setHouse(event.target.value);
  }

  const {pathname} = useLocation();
  const dataUrl = matchPath('/character/:id', pathname);
  const characterId = dataUrl !== null ? dataUrl.params.id : null;
  const characterFind = filterName.find((eachCharacter) => eachCharacter.id === characterId);

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Filters handleFilter={handleFilter} search={search} handleHouse={handleHouse}/>
              <CharacterList data={data} search={search}/>
            </>
          }>
          </Route>
          <Route path="/character/:id" element={<CharacterDetail characterFind={characterFind}/>}/>
        </Routes>
      </main>
    </>);
};

export default App;
