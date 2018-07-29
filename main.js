const logoHeight = document.querySelector('.logo-height');
const documentHeight = document.querySelector('.background');
const scrollTopButton = document.querySelector('.scroll-top-btn');

window.addEventListener("scroll", function() {
    if(window.scrollY <= logoHeight.clientHeight) {
        scrollTopButton.style.display = "none";
    } else {
        scrollTopButton.style.display = "inline-block";
    }
});

scrollTopButton.addEventListener('click', function() {
    const scroll = setInterval(function() { 
        window.scrollTo(0, window.scrollY - 15); 
        if(window.scrollY == 0) {
            clearInterval(scroll);
           }
       }, .1);
});
