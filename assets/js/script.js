// const parallax = document.getElementById("paralla");

// window.addEventListener("scroll", function(){
//     let offset = window.pageYOffset;
//     parallax.style.backgroundPositionY = `${offset * 0.2}px`;
// })

//above is meant to be for the parallax effect that i told you about you can give it a trey sha




/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__scroll', {origin: 'top', distance: '80px'})
sr.reveal('.contact', {origin: 'bottom', distance:'100px'})
sr.reveal('.aboutsection', {origin:'top', distance: '100px', delay: 100})
sr.reveal('.ser__2', {origin:'top', distance: '100px'})
sr.reveal('.ser__3', {origin:'bottom', distance: '100px', delay: 100})

sr.reveal('.exclusive', {origin:'bottom', distance: '50px', duration: 1000})

sr.reveal('.contract', {origin:'bottom', distance: '200px'})

sr.reveal('.industry', {origin:'bottom', distance: '100px', delay: 200})

sr.reveal('.clients', {origin:'bottom', distance: '120px'})

// just check for the class names to get where they are working for
