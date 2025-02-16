document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrambleTextPlugin);

    gsap.to("#photo", {
        duration: 4,
        scrambleText: {
            text: "Photography is more than just images—it’s perspective, emotion, and storytelling in a single frame.",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Controls random chars
            revealDelay: 1, 
            tweenLength: false, 
            speed: 0.4
        }
    });
});