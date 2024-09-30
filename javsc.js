const swiper = new Swiper('.swiper-container', {
    loop: true, // Hacer que el slider sea infinito
    slidesPerView: 2, // Cuántas diapositivas se muestran a la vez
    centeredSlides: true, // Centrar la diapositiva activa
    grabCursor: true, // Cambiar el cursor al de 'agarre'
    
    // Controles de paginación
    pagination: {
    el: '.swiper-pagination',
      clickable: true, // Permitir que los usuarios hagan clic en la paginación
    },

    // Controles de navegación
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // Efecto Coverflow (opcional, ajustable)
    effect: 'coverflow',
    coverflowEffect: {
rotate: 50,
stretch: 0,
depth: 100,
modifier: 1,
slideShadows: true,
    },
    
    // Velocidad de transición (opcional)
    speed: 1000
});

