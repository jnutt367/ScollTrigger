gsap.fromTo(".circle", { x: 50, y: -100 }, {
    duration: "4",
    padding: "100",
    x: 100,
    y: -900,
    ease: "bounce.in",

    border: "5px solid yellow"
});

gsap.fromTo(".rect", { x: 100 }, { duration: "2.5", y: "-150", rotate: "35" });
gsap.to(".h2", { backgroundColor: "black", padding: "20" });