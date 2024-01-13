import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";


const fetchBusqueda = async (pagina = 1) => {
    const tipo = document.querySelector('.main__filtros .btn--active')?.id;
    const idGenero = document.querySelector('#filtro-generos .btn--active')?.dataset.id;
    const añoInicial = document.getElementById('años-min').value || 1950;
    const añoFinal = document.getElementById('años-max').value || 2023;

    console.log(tipo, idGenero, añoInicial, añoFinal);

    let url;

    if (tipo === 'movie') {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=1f568d2185657f7dca3a595bf59fffd6&
        include_adult=false&include_video=false&language=es-MX&page=${pagina}&primary_release_date.gte=${añoInicial}&primary_release_date.lte=${añoFinal}&sort_by=popularity.desc&with_genres=${idGenero}`
    } else if (tipo === 'tv') {
        url = `https://api.themoviedb.org/3/discover/tv?api_key=1f568d2185657f7dca3a595bf59fffd6&first_air_date_year=${añoInicial}first_air_date.gte=${añoFinal}&include_adult=false&include_null_first_air_dates=false&language=es-MX&page=${pagina}&sort_by=popularity.desc&with_genres=${idGenero}`
    }

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const resultados = datos.results; //results es de la api

        const generos = await fetchGeneros();
        resultados.forEach((resultado) => {
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
        });
        
        return resultados;
    } catch (e) {
        console.log(e);
    }

};

export default fetchBusqueda;