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

    // Trigger hero animation if exists
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

// ========================= HEADER SHADOW ON SCROLL =========================
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ========================= SEARCH OVERLAY =========================
const searchIcon = document.getElementById("search-icon");
const searchOverlay = document.getElementById("search-overlay");
const searchInput = document.getElementById("search-input");

if (searchIcon) {
    searchIcon.addEventListener("click", (e) => {
        e.preventDefault();
        searchOverlay.style.display = "flex";
        gsap.fromTo(
            searchOverlay,
            { opacity: 0 },
            { opacity: 1, duration: 0.4 }
        );
        searchInput.focus();
    });
}

if (searchOverlay) {
    searchOverlay.addEventListener("click", (e) => {
        if (e.target === searchOverlay) {
            gsap.to(searchOverlay, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => (searchOverlay.style.display = "none"),
            });
        }
    });
}

// ========================= BACK TO TOP =========================
const backToTop = document.getElementById("back-to-top");
if (backToTop) {
    backToTop.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, { duration: 0.8, scrollTo: 0, ease: "power2.out" });
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
let chatOpen = false;

if (chatWidget && chatHeader) {
    chatHeader.addEventListener("click", () => {
        chatOpen = !chatOpen;
        const body = document.getElementById("chat-body");

        if (chatOpen) {
            gsap.to(body, { height: "auto", opacity: 1, duration: 0.3 });
        } else {
            gsap.to(body, { height: 0, opacity: 0, duration: 0.3 });
        }
    });
}

// ========================= FULLSCREEN IMAGE VIEWER (MEDIA PAGE) =========================
const fullscreenOverlay = document.getElementById("fullscreen-overlay");
const fullscreenImage = document.getElementById("fullscreen-image");

window.openFull = function (src) {
    if (!fullscreenOverlay || !fullscreenImage) return;

    fullscreenImage.src = src;
    fullscreenOverlay.style.display = "flex";

    gsap.fromTo(
        fullscreenImage,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
    );
};

window.closeFull = function () {
    if (!fullscreenOverlay) return;

    gsap.to(fullscreenOverlay, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            fullscreenOverlay.style.display = "none";
            fullscreenOverlay.style.opacity = 1;
        },
    });
};

// ========================= SMOOTH APPEAR ANIMATIONS =========================
const cards = document.querySelectorAll(".card");
if (cards.length > 0) {
    cards.forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
            },
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
        });
    });
}
