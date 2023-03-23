window.onscroll = function() {scrollPage()};

const header = document.querySelector(".header");


const sticky = header.offsetTop;


function scrollPage() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}


