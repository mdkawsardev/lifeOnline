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

let allLink = document.querySelectorAll('.nav-link');
allLink.forEach((link) => {
    link.addEventListener('click', () => {
        allLink.forEach((l) => {
            l.classList.remove('active');
        })
        link.classList.add('active');
    })
})