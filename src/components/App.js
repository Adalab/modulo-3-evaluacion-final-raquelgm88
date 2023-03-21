import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import {Link, Route, Routes} from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';

function App() {

  const [data, setData] = useState([]);
  const [house, setHouse] = useState('');
  

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

  const renderList = () => {
    return data.map ((eachCharacter, index) => {
      return <li key={index} id={eachCharacter.id} className="li">
        <img src={eachCharacter.image} alt="" />
        <div>{eachCharacter.name}</div>
        <div>{eachCharacter.species}</div>
      </li>
    })
  };

  const handleHouse = (event) => {
    setHouse(event.target.value);
  }

  return <>
    <Header/>
    <main>
      <form>
        <label htmlFor="search">Busca por personaje: </label>
        <input type="search" name="search" autoComplete='off' />
        <label htmlFor="house">Selecciona la casa: </label>
        <select name="house" id="house" onChange={handleHouse}>
          <option value="gryffindor">Gryffindor</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="slytherin">Slytherin</option>
        </select>
      </form>
      <ul>{renderList()}</ul>
    </main>

  </>;
}

export default App;
