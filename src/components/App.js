import { useEffect, useState } from 'react';
import callToApi from '../services/api';
//import {Link, Route, Routes} from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';

import Filters from './Filters';
import CharacterList from './CharacterList';


function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [house, setHouse] = useState('gryffindor');

  useEffect(() => {
    callToApi(house).then((response) => {
      setData(response);
    });
  }, [house]);



  const handleFilter = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const handleHouse = (event) => {
    setHouse(event.target.value);
  }

  return <>
    <Header/>
    <main>
    <Filters handleFilter={handleFilter} search={search} handleHouse={handleHouse}/>
      <CharacterList data={data} house={house} search={search}/>
    </main>

  </>;
}

export default App;
