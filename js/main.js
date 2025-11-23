// ========================= PRELOADER =========================
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        gsap.to(preloader, {
            autoAlpha: 0,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => (preloader.style.display = "none"),
        });
    }

    const hero = document.querySelector(".hero .hero-content");
    if (hero) {
        gsap.from(hero.children, {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
        });
    }
});

// ========================= HEADER SHADOW =========================
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 40);
});

// ========================= MOBILE MENU =========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("mobile-open");
    });
}

// ========================= MOBILE DROPDOWN =========================
document.querySelectorAll(".dropdown > .dropbtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (window.innerWidth <= 830) {
            // If the button is PRODUCTS → allow navigation
            if (btn.getAttribute("href") === "products.html") {
                return; // do NOT block click
            }

            // Otherwise, dropdown toggle behavior
            e.preventDefault();
            btn.parentElement.classList.toggle("active");
        }
    });
});


// ========================= BACK TO TOP =========================
const backToTop = document.getElementById("back-to-top");
if (backToTop) {
    backToTop.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, { duration: 0.8, scrollTo: 0 });
    });
}

// ========================= COOKIE BANNER =========================
const cookieBanner = document.getElementById("cookie-banner");
const cookieAccept = document.getElementById("cookie-accept");

if (cookieBanner && cookieAccept) {
    if (!localStorage.getItem("cookieAccepted")) {
        cookieBanner.style.display = "flex";
    }

    cookieAccept.addEventListener("click", () => {
        localStorage.setItem("cookieAccepted", "true");
        gsap.to(cookieBanner, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => (cookieBanner.style.display = "none"),
        });
    });
}

// ========================= CHAT WIDGET =========================
const chatWidget = document.getElementById("chat-widget");
const chatHeader = document.getElementById("chat-header");

if (chatWidget && chatHeader) {
    chatHeader.addEventListener("click", () => {
        const body = document.getElementById("chat-body");
        const open = body.style.height === "auto";

        if (open) {
            gsap.to(body, { height: 0, opacity: 0, duration: 0.3 });
        } else {
            gsap.set(body, { height: "auto" });
            gsap.from(body, { height: 0, opacity: 0, duration: 0.3 });
        }
    });
}

// ========================= FULLSCREEN VIEWER =========================
const fullscreenOverlay = document.getElementById("fullscreen-overlay");
const fullscreenImage = document.getElementById("fullscreen-image");

window.openFull = function (src) {
    if (!fullscreenOverlay || !fullscreenImage) return;

    fullscreenImage.src = src;
    fullscreenOverlay.style.display = "flex";

    gsap.fromTo(
        fullscreenImage,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.35 }
    );
};

window.closeFull = function () {
    if (!fullscreenOverlay) return;

    gsap.to(fullscreenOverlay, {
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
            fullscreenOverlay.style.display = "none";
            fullscreenOverlay.style.opacity = 1;
        },
    });
};

// ========================= CARD ANIMATIONS =========================
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 0.7,
    });
});

