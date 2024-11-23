var t1 = gsap.timeline();
var t2 = gsap;
var t3 = gsap.timeline();

t1.from(".header1", {
    y: -40,
    opacity: 0,
    duration: 0.5,
    delay: -0.2
});

t1.from(".header2", {
    y: -40,
    opacity: 0,
    duration: 0.5,
    delay: -0.2
})

t1.from(".header3", {
    opacity: 0,
    duration: 0.5,
    delay: -0.2
});

t1.from(".p", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: -0.2
});

t1.from(".historia", {
    opacity: 0,
    duration: 1.5,
    delay: 0
});


t2.from(".ovelha", {
    x: -125,
    opacity: 0,
    duration: 1.5,
    delay: 1.5
});

t2.from(".lobo", {
    x: 125,
    opacity: 0,
    duration: 1.5,
    delay: 1.5
});






t3.from(".ul1", {

})
