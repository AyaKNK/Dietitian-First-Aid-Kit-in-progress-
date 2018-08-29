const logoHeight = document.querySelector('.logo-height');
const documentHeight = document.querySelector('.background');
const scrollTopButton = document.querySelector('.scroll-top-btn');

// window.addEventListener("scroll", function() {
//     if(window.scrollY <= logoHeight.clientHeight) {
//         scrollTopButton.style.display = "none";
//     } else {
//         scrollTopButton.style.display = "inline-block";
//     }
// });

window.addEventListener("scroll", function() {
    if(window.scrollY <= logoHeight.clientHeight) {
        scrollTopButton.classList.remove('scroll-top-btn__smooth-fade');
    } else {
        scrollTopButton.classList.add('scroll-top-btn__smooth-fade');
    }
});

// scrollTopButton.addEventListener('click', function() {
//     const scroll = setInterval(function() { 
//         window.scrollTo(0, window.scrollY - 15); 
//         if(window.scrollY == 0) {
//             clearInterval(scroll);
//            }
//        }, .1);
// });

scrollTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"})
});

const buttonShowHide = document.querySelector('.button__show-hide');
const buttonShowHideText = document.querySelector('.button__show-hide p');
const hover = document.querySelectorAll('.button');
const imgShow = document.querySelector('.eye-img-show');
const imgHide = document.querySelector('.eye-img-hide');
buttonShowHide.addEventListener('click', function(){
    for(x=0; x<hover.length; x++) {
        hover[x].classList.toggle('nohover');
    }
    if (buttonShowHideText.innerHTML === "SCHOWAJ") {
        buttonShowHideText.innerHTML = "POKAŻ<br>WSZYSTKO";
        imgShow.style.display = "inline-block";
        imgHide.style.display = "none";
    } else {
        buttonShowHideText.innerHTML = "SCHOWAJ";
        imgShow.style.display = "none";
        imgHide.style.display = "inline-block";
    }
});
window.addEventListener('resize', function(){
    if(window.innerWidth <= 425) {
        for(x=0; x<hover.length; x++) {
            hover[x].classList.remove('nohover');
        }
        buttonShowHideText.innerHTML = "POKAŻ<br>WSZYSTKO";
        imgShow.style.display = "inline-block";
        imgHide.style.display = "none";
    }
});