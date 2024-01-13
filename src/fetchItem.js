const fetchItem = async (id) => {
    const tipo = document.querySelector('.main__filtros .btn--active').id;

    try {
        const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=1f568d2185657f7dca3a595bf59fffd6&language=es-MX`;
     const respuesta = await fetch(url);
        const datos = await respuesta.json(); // PERMITE EXTRAR LOS DATOS DE LA RESPUESTA
        return datos; //LOS REGRESAMOS A LISTENER ITEMS
    } catch (e) {
        console.log(e);
    }


}

export default fetchItem;