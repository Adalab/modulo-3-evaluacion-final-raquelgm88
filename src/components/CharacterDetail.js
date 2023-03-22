const CharacterDetail = ({characterFind}) => {
    return (
        <>
            <button>Volver</button>
            <article>
                <img src={characterFind.image} alt="" />
                <h3>{characterFind.name}</h3>
                <p>Casa: {characterFind.house}</p>
                <p>Especie: {characterFind.species}</p>
                <p>Género: {characterFind.gender}</p>
                <p>Estatus: {characterFind.alive}</p>
                <p>Nombres alternativos: {characterFind.alternate_names}</p>
            </article>
        </>
    );
};

export default CharacterDetail;