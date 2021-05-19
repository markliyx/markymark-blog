let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
});

// with masonry 
new Masonry("#posts .grid", {
    itemSelector:'.grid-item', 
    gutter: 23
});

// swiper library initialization 
new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true, 
    slidesPerView: 5, 
    autoplay: {
        delay: 3000
    }, 

    // responsive breakpoints 
    breakpoints: {
        '@0': {
            slidesPerView: 2
        }, 
        // 888px
        '@1.00': {
            slidesPerView: 3
        }, 
        // 1110px
        '@1.25': {
            slidesPerView: 4
        }, 
        '@1.50':{
            slidesPerView: 5
        }
    }
})

// sticky navigation 
window.onscroll = function(){stick()};

// get the current value
let navbar = document.getElementById('header');

// get the navbar position 
let sticky = navbar.offsetTop;

// sticky function 
function stick(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    } else{
        navbar.classList.remove("sticky");
    }
}

// filtering out video types
