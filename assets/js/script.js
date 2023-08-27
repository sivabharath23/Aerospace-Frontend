// let x =(a,b) => {
//     return a+b;
// }

// console.log(x(1,2));


// let call1 = () => alert('hey there');

// call1();

// let call = () => alert('hey there');
// call(); // Invoking the function


window.onscroll = function() {
    var menu = document.querySelector(".head-menu");
    if (window.pageYOffset > 0) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
};
