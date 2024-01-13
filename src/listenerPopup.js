const popup = document.getElementById('media');  //! DELEGACION DE EVENTOS
popup.addEventListener('click', (e) => {
    if(e.target.closest('button')){
        popup.classList.remove('media--active');
    }
});