let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelector('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let typed = new Typed(".typed-text", {
    strings: ["Web Developer", "Graphic Designer", "Mobile Developer", "Public Speaker", "Content Creator"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
});
