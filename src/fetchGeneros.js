const fetchGeneros = async (filtro = 'movie') => {
    const tipo = filtro === 'movie' ? 'movie' : 'tv'; //TERNARIO

    const url = `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=1f568d2185657f7dca3a595bf59fffd6&language=es-MX&page=1`;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json(); //* ESTE METODO ES ASINCRONO (SE EJECUTA DE FONDO)
        return datos.genres;
    } catch (error) {
        console.log(error);
    }

}

export default fetchGeneros;