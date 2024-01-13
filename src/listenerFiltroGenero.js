const contenedor = document.getElementById('filtro-generos');

contenedor.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.closest('button')) {   //? (delegación de eventos) acceder al evento (e), acceder al objetivo (target) y vamos a buscar el boton mas cercano(closest)
        contenedor.querySelector('.btn--active')?.classList.remove('btn--active');
        //! agregamos clase active al boton que clickeamos
        e.target.classList.add('btn--active');
    }

});

