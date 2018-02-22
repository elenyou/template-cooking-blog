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

