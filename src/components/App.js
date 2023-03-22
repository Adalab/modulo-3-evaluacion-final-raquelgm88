import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import {Link, Route, Routes} from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
import avatar from '../images/avatar.jpg';
import Filters from './Filters';

function App() {

  const [data, setData] = useState([]);
  const [search, SetSearch] = useState('');
  const [house, setHouse] = useState('gryffindor');
  

  useEffect(() => {
    callToApi(house).then((response) => {
      setData(response);
    });
  }, [house]);

  const renderList = () => {
    return data.filter((eachCharacter) => {
      return eachCharacter.name.toLowerCase().includes(search.toLowerCase());
    }).map ((eachCharacter, index) => {
      if(eachCharacter.image === "") {
        eachCharacter.image = avatar;
      };
      return <li key={index} id={eachCharacter.id} className="li">
        <img src={eachCharacter.image} alt="" className='li__img'/>
        <div className='li__name'>{eachCharacter.name}</div>
        <div className='li__specie'>{eachCharacter.species}</div>
      </li>
    })
    
  };

  const handleFilter = (event) => {
    event.preventDefault();
    SetSearch(event.target.value);
  }

  const handleHouse = (event) => {
    setHouse(event.target.value);
  }

  return <>
    <Header/>
    <main>
      <Filters handleFilter={handleFilter} search={search} handleHouse={handleHouse}/>
      <ul className='ul'>{renderList()}</ul>
    </main>

  </>;
}

export default App;
