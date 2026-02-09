// Scroll reveal animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {

        const top = sec.getBoundingClientRect().top;

        if(top < trigger){
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }

    });
});


// Skill progress animation when visible
const progressBars = document.querySelectorAll(".progress");

window.addEventListener("load", () => {

    progressBars.forEach(bar => {

        const width = bar.style.width;
        bar.style.width = "0";

        setTimeout(() => {
            bar.style.width = width;
        }, 500);

    });

});
