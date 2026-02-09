// Smooth scroll effect for nav links
document.querySelectorAll("nav ul li").forEach(item => {
    item.addEventListener("click", () => {
        item.style.color = "#ffffff";

        setTimeout(() => {
            item.style.color = "";
        }, 300);
    });
});


// Image click zoom effect
const images = document.querySelectorAll("section img");

images.forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("zoomed");
    });
});


// Scroll reveal animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < trigger) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});
