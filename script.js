// ================= STICKY NAVBAR =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

});

// ================= ACTIVE NAV LINKS =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});

// ================= SCROLL TO TOP =================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ================= RESERVATION FORM =================

const reservationForm = document.getElementById("reservationForm");
const successMessage = document.getElementById("successMessage");

reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    successMessage.innerHTML =
        "✅ <strong>Your table has been reserved successfully!</strong>";

    successMessage.style.display = "block";

    reservationForm.reset();

    setTimeout(() => {
        successMessage.innerHTML = "";
        successMessage.style.display = "none";
    }, 3000);
});

// ================= GALLERY LIGHTBOX =================

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("show");
        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        lightbox.classList.remove("show");
    }

});

// ================= AOS =================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

// ================= HAMBURGER MENU =================

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// ================= MENU FILTER =================

const filterButtons = document.querySelectorAll(".menu-filter button");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {
    button.addEventListener("click", function () {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        menuCards.forEach(card => {

            if (filter === "all" || card.getAttribute("data-category") === filter) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });
});

// ================= LOADER =================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {
            loader.remove();
        }, 800);

    }, 2500);

});