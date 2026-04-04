window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.8)";
        nav.style.backdropFilter = "blur(10px)";
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    } else {
        nav.style.background = "#0f2027";
        nav.style.boxShadow = "none";
    }
});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});
const text = "Aspiring Web Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".hero-text h2").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

document.querySelector(".hero-text h2").innerHTML = "";
typeEffect();
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
const button = document.querySelector(".hero-text button");

button.addEventListener("click", function (e) {
    let circle = document.createElement("span");
    circle.classList.add("ripple");
    this.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 600);
});
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change icon
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});
const container = document.querySelector(".project-container");

document.getElementById("left-btn").onclick = () => {
    container.scrollBy({ left: -300, behavior: "smooth" });
};

document.getElementById("right-btn").onclick = () => {
    container.scrollBy({ left: 300, behavior: "smooth" });
};

const bar = document.querySelector(".progress-bar");

container.addEventListener("scroll", () => {
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const scrolled = (container.scrollLeft / scrollWidth) * 100;
    bar.style.width = scrolled + "%";
});