import cargarGeneros from "./cargarGeneros";
import cargarTitulos from "./cargarTitulos";
import fetchPopulares from "./fetchPopulares";

const filtroPelicula = document.getElementById('movie');
const filtroShow = document.getElementById('tv');

filtroPelicula.addEventListener('click', async(e) => {
    e.preventDefault();

    //*CARGAMOS LOS GENEROS EN LA BARRA LATERAL.
    cargarGeneros(`movie`);

    //*OBTENEMOS LOS RESULTADOS.
    const resultados = await fetchPopulares(`movie`);

    //*CARGAMOS eN EL DOM
    cargarTitulos(resultados);
    filtroShow.classList.remove('btn--active');
    filtroPelicula.classList.add('btn--active');

    document.querySelector('#populares .main__titulo').innerText = "Series Populares";

});

filtroShow.addEventListener('click', async(e) => {
    e.preventDefault();

    //*CARGAMOS LOS GENEROS EN LA BARRA LATERAL.
    cargarGeneros(`tv`);

    //*OBTENEMOS LOS RESULTADOS.
    const resultados = await fetchPopulares(`tv`);

    //*CARGAMOS eN EL DOM
    cargarTitulos(resultados);
    filtroPelicula.classList.remove('btn--active');
    filtroShow.classList.add('btn--active');

    document.querySelector('#populares .main__titulo').innerText = "Series Populares";

});