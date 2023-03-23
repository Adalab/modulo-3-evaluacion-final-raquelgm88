const Filters = ({handleFilter, search, handleHouse}) => {

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

    return (
      <form className='form' onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="search">Busca por personaje: </label>
        <input className='form__input' type="search" name="search" autoComplete='off' onInput={handleFilter} value={search}/>
        <label className="form__label" htmlFor="house">Selecciona la casa: </label>
        <select className='form__select' name="house" id="house" onChange={handleHouse}>
          <option value="gryffindor">Gryffindor</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="slytherin">Slytherin</option>
        </select>
      </form>
    );
};
export default Filters;