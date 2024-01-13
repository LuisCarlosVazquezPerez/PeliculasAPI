import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

const fetchPopulares = async (filtro = 'movie') => {
    const tipo = filtro === 'movie' ? 'movie' : 'tv'; //TERNARIO

    const url = `https://api.themoviedb.org/3/${tipo}/popular?api_key=1f568d2185657f7dca3a595bf59fffd6&language=es-MX&page=1`;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json(); //* ESTE METODO ES ASINCRONO (SE EJECUTA DE FONDO)
        const resultados = datos.results;

        const generos = await fetchGeneros();
        resultados.forEach((resultado) => {
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
        });

        return resultados;

    } catch (error) {
        console.log(error);
    }

};

export default fetchPopulares;