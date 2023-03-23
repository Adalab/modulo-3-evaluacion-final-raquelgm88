const Filters = ({handleFilter, search, handleHouse, handleGender}) => {

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

    return (
      <form className='form' onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="search">Busca por personaje: </label>
        <input className='form__input' type="text" name="search" autoComplete='off' onInput={handleFilter} value={search}/>
        <label className="form__label" htmlFor="house">Selecciona la casa: </label>
        <select className='form__select' name="house" id="house" onChange={handleHouse}>
          <option value="gryffindor">Gryffindor</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="slytherin">Slytherin</option>
        </select>
        <label className="form__label" htmlFor="gender">Filtra por género: </label>
        <select className='form__select' name="gender" id="gender" onChange={handleGender}>
          <option value="todos">Todos</option>
          <option value="male">Hombre</option>
          <option value="female">Mujer</option>
        </select>
      </form>
    );
};
export default Filters;