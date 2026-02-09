const cards = document.querySelectorAll(".game-card");

function revealCards(){

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < trigger){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
