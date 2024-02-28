let menubutton = document.querySelector("#menu");
let container = document.querySelector(".container");
let csize = true;
let homebtn = document.querySelector("#home");
let contactbtn = document.querySelector("#contact")

// Click Event 

homebtn.addEventListener("click", () => {
    container.style.transform = "scale(.8)";
    container.style.borderRadius = "10px"
    container.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";

});

contactbtn.addEventListener("click", () => {
    container.style.transform = "scale(.8)";
    container.style.borderRadius = "10px"
    container.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";

});

menubutton.addEventListener("click", () => {
    container.style.transform = "scale(.8)";
    container.style.borderRadius = "10px"
    container.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";

});

// End Click Event

const timeline = gsap.timeline();

// Body Gsap Animation 

timeline.from('.navbar', {
    duration: 2,
    y: -20,
    stagger: .3,
    delay: 6,
    ease: 'Expo.easeInOut',
    opacity: 0
})

    .from('.line', {
        width: 0,
        duration: 1,
        ease: 'Expo.easeInOut',
    }, '-=2')
    .from('.leftitem', {
        stagger: .3,
        duration: 2,
        y: 20,
        ease: 'Expo.easeInOut',
        opacity: 0
    }, '-=2')
    .from('.rightalign img', {
        duration: 2,
        scale: 1.05,
        ease: 'Expo.easeInOut',
        opacity: 0
    }, '-=2')

// End Body Gsap Animation