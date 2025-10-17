let preloader = document.querySelector('.preloader');
setTimeout(() => {
    document.body.classList.remove('overflow-hidden');
    preloader.classList.add('d-none');
}, 1500);

let h1 = document.querySelector('.title h1');
setInterval(() => {
 h1.classList.toggle('lightning');
}, 2000)

let toTopBtn = document.querySelector('.toTop');
window.addEventListener('scroll', () => {
    if(window.scrollY === 0) {
    toTopBtn.classList.add('d-none');
} else if(window.scrollY > 500) {
    toTopBtn.classList.remove('d-none');
}
})
toTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})
window.addEventListener('load', () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})

let allLink = document.querySelectorAll('.nav-link');
allLink.forEach((link) => {
    link.addEventListener('click', () => {
        allLink.forEach((l) => {
            l.classList.remove('active');
        })
        link.classList.add('active');
    })
})

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navbarLinks = Array.from(document.querySelectorAll('.link'));

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - window.innerHeight / 3;
        if ((window.scrollY >= sectionTop) && (window.scrollY < sectionTop + section.offsetHeight)) {
            currentSection = section.getAttribute('id');
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});