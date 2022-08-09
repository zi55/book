const showMenu = function(toggleId, navId){
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    };
};
showMenu('nav-toggle', 'nav-menu');



// let burgerBtn = document.querySelector('.burger_icon');
// let menu = document.querySelector('.about_menu');

// burgerBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     menu.classList.toggle("active")
// })
