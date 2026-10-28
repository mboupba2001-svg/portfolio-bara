
"use strict";

// ========================================
// 1. MENU DE NAVIGATION SUR MOBILE
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    // Mettre à jour l'état du menu
    function updateMenu(isOpen) {
        navLinks.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fermer le menu" : "Ouvrir le menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    }

    // Ouvrir ou fermer le menu avec le bouton
    menuToggle.addEventListener("click", () => {
        const isOpen = !navLinks.classList.contains("active");
        updateMenu(isOpen);
    });

    // Fermer le menu après avoir choisi une rubrique
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            updateMenu(false);
        });
    });

    // Fermer le menu avec la touche Échap
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            updateMenu(false);
        }
    });

    // Fermer le menu si on repasse à l'affichage ordinateur
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            updateMenu(false);
        }
    });
}

// ========================================
// 2. ANNÉE AUTOMATIQUE DANS LE PIED DE PAGE
// ========================================

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
