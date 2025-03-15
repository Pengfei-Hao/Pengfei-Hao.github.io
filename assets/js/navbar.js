window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.glass-navbar');
    const scroll = window.scrollY;

    // navbar.style.background = `rgba(255, 255, 255, ${Math.min(0.95, 0.85 + scroll/1000)})`;
    // if(scroll > 0) {
    //     navbar.classList.add('border-bottom');
    //     navbar.classList.add('border-gray');
    // }
    // else {
    //     navbar.classList.remove('border-bottom');
    //     navbar.classList.remove('border-gray');
    // }
    navbar.classList.toggle('scrolled', scroll > 0);

});