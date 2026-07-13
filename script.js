"use strict";

const artworkGrid = document.getElementById("artworkGrid");
const filterButtons = document.querySelectorAll(".filter-button");

const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCategory = document.getElementById("lightboxCategory");
const lightboxDescription = document.getElementById(
  "lightboxDescription"
);
const lightboxNumber = document.getElementById("lightboxNumber");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.getElementById("siteHeader");
const cursorGlow = document.getElementById("cursorGlow");

const portfolioData = Array.isArray(window.portfolioData)
  ? window.portfolioData
  : [];

/**
 * Converts artwork ID into a three-digit number.
 * Example: 1 becomes 001.
 */
function formatArtworkNumber(id) {
  return String(id).padStart(3, "0");
}

/**
 * Renders artwork cards.
 */
function renderArtworks(filter = "all") {
  artworkGrid.innerHTML = "";

  const filteredArtworks =
    filter === "all"
      ? portfolioData
      : portfolioData.filter(
          (artwork) => artwork.category === filter
        );

  if (filteredArtworks.length === 0) {
    artworkGrid.innerHTML = `
      <p class="empty-message">
        No artwork has been added to this category yet.
      </p>
    `;

    return;
  }

  filteredArtworks.forEach((artwork) => {
    const card = document.createElement("article");

    card.className = "artwork-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute(
      "aria-label",
      `View ${artwork.title}`
    );

    card.innerHTML = `
      <div class="artwork-image">
        <img
          src="${artwork.image}"
          alt="${artwork.title}"
          loading="lazy"
        >
      </div>

      <div class="artwork-overlay">
        <span class="artwork-number">
          ${formatArtworkNumber(artwork.id)}
        </span>

        <div class="artwork-info">
          <h3>${artwork.title}</h3>

          <div class="artwork-meta">
            <span>${artwork.categoryLabel}</span>
            <span>${artwork.year}</span>
          </div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      openLightbox(artwork);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(artwork);
      }
    });

    artworkGrid.appendChild(card);
  });
}

/**
 * Opens artwork lightbox.
 */
function openLightbox(artwork) {
  lightboxImage.src = artwork.image;
  lightboxImage.alt = artwork.title;

  lightboxTitle.textContent = artwork.title;

  lightboxCategory.textContent =
    `${artwork.categoryLabel} / ${artwork.year}`;

  lightboxDescription.textContent = artwork.description;

  lightboxNumber.textContent =
    `PROJECT ${formatArtworkNumber(artwork.id)}`;

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("lightbox-open");

  lightboxClose.focus();
}

/**
 * Closes artwork lightbox.
 */
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.classList.remove("lightbox-open");

  lightboxImage.src = "";
}

/**
 * Handles artwork category filtering.
 */
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    renderArtworks(filter);
  });
});

/**
 * Lightbox controls.
 */
lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    lightbox.classList.contains("open")
  ) {
    closeLightbox();
  }
});

/**
 * Mobile navigation.
 */
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  document.body.classList.toggle(
    "lightbox-open",
    isOpen
  );
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove("lightbox-open");
  });
});

/**
 * Header style while scrolling.
 */
window.addEventListener("scroll", () => {
  siteHeader.classList.toggle(
    "scrolled",
    window.scrollY > 40
  );
});

/**
 * Cursor glow effect.
 */
window.addEventListener("mousemove", (event) => {
  if (!cursorGlow) {
    return;
  }

  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

/**
 * Footer year.
 */
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

/**
 * Initial render.
 */
renderArtworks();