const Filters = ({handleFilter, search, handleHouse, handleGender, reset, house, gender}) => {

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

    return (
      <form className='main__form' onSubmit={handleSubmit}>
        <label className="main__form_label" htmlFor="search">Busca por personaje: </label>
        <input className='main__form_input' type="text" name="search" autoComplete='off' onInput={handleFilter} value={search}/>
        <label className="main__form_label" htmlFor="house">Selecciona la casa: </label>
        <select className='main__form_select' name="house" id="house" onChange={handleHouse} value={house}>
          <option value="gryffindor">Gryffindor</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="slytherin">Slytherin</option>
        </select>
        <label className="main__form_label" htmlFor="gender">Filtra por género: </label>
        <select className='main__form_select' name="gender" id="gender" onChange={handleGender} value={gender}>
          <option value="todos">Todos</option>
          <option value="male">Hombre</option>
          <option value="female">Mujer</option>
        </select>
        <button className="main__form_reset" onClick={reset}>Reset</button>
      </form>
    );
};
export default Filters;