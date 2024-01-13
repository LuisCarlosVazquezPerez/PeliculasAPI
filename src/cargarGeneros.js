import fetchGeneros from "./fetchGeneros";

const contenedorGeneros = document.getElementById('filtro-generos');


const cargarGeneros = async (filtro) => {
    const generos = await fetchGeneros(filtro);

    contenedorGeneros.innerHTML = ''; //LIMPIAR

    generos.forEach((genero) => {
        //CREAR BOTON
        //! 1 CREAR VARIABLE
        const btn = document.createElement('button');
        //! 2 AGREGAMOS CLASE
        btn.classList.add('btn');
        //! 3 AGREGAMOS TEXTO
        btn.innerText = genero.name;
        //! 4 BOTON CON ATRIBUTO PERSONALIZADO
        btn.setAttribute('data-id', genero.id);
        //! 5 AGREGAR EL BOTON AL CONTENEDOR
        contenedorGeneros.appendChild(btn);
    });
}

export default cargarGeneros;