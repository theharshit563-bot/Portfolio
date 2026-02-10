/* ===== Scroll Reveal Animation ===== */

const projectCards = document.querySelectorAll(".project-card");

function revealProjects(){

    const trigger = window.innerHeight * 0.85;

    projectCards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < trigger){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });
}

window.addEventListener("scroll", revealProjects);
window.addEventListener("load", revealProjects);


/* ===== Prevent Terminal Scroll Trap ===== */

document.querySelectorAll(".terminal-box pre").forEach(pre => {

    pre.addEventListener("wheel", (e) => {

        // Scroll page instead of terminal
        window.scrollBy({
            top: e.deltaY,
            behavior: "auto"
        });

    });

});
