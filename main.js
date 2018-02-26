// navbar

const menuOne = document.querySelector('.menuOne');
const mySidenav = document.getElementById("mySidenav");
menuOne.addEventListener('click', function () {
    this.classList.toggle("clickMenuOne");

    if (mySidenav.style.marginLeft == "-250px") {
        mySidenav.style.marginLeft = "0";
    } else {
       mySidenav.style.marginLeft = "-250px";
    }
}
);

// Animation
$(document).ready(function() {

    function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).scroll(function () {
        $('.animate').each(function () {
            if (isScrolledIntoView(this)) {
                $(this).addClass('start')
            }
        });

    });
    
});
    