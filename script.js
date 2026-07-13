"use strict";

const collectionsContainer = document.getElementById(
  "collectionsContainer"
);

const collectionNavigation = document.getElementById(
  "collectionNavigation"
);

const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCategory = document.getElementById(
  "lightboxCategory"
);
const lightboxDescription = document.getElementById(
  "lightboxDescription"
);
const lightboxNumber = document.getElementById(
  "lightboxNumber"
);

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.getElementById("siteHeader");
const cursorGlow = document.getElementById("cursorGlow");
const currentYear = document.getElementById("currentYear");

const collections = Array.isArray(
  window.portfolioCollections
)
  ? window.portfolioCollections
  : [];

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function renderCollectionNavigation() {
  if (!collectionNavigation) {
    return;
  }

  collectionNavigation.innerHTML = collections
    .map((collection, index) => {
      return `
        <a href="#collection-${collection.id}">
          <span>${formatNumber(index + 1)}</span>
          ${collection.shortTitle}
        </a>
      `;
    })
    .join("");
}

function renderCollections() {
  if (!collectionsContainer) {
    return;
  }

  collectionsContainer.innerHTML = collections
    .map((collection, collectionIndex) => {
      const artworkCards = collection.artworks
        .map((artwork, artworkIndex) => {
          return `
            <article
              class="collection-artwork"
              tabindex="0"
              role="button"
              data-collection-index="${collectionIndex}"
              data-artwork-index="${artworkIndex}"
              aria-label="Open ${artwork.title}"
            >
              <div class="collection-artwork-image">
                <img
                  src="${artwork.image}"
                  alt="${artwork.title}"
                  loading="lazy"
                >
              </div>

              <div class="collection-artwork-overlay">
                <span class="collection-artwork-number">
                  ${formatNumber(artworkIndex + 1)}
                </span>

                <div class="collection-artwork-info">
                  <h3>${artwork.title}</h3>
                  <p>${collection.title}</p>
                </div>
              </div>
            </article>
          `;
        })
        .join("");

      return `
        <section
          class="art-collection"
          id="collection-${collection.id}"
        >
          <header class="collection-header">
            <div class="collection-index">
              ${formatNumber(collectionIndex + 1)}
            </div>

            <div class="collection-heading">
              <div>
                <h2>${collection.title}</h2>
                <p class="collection-description">
                  ${collection.description}
                </p>
              </div>

              <p class="collection-count">
                ${collection.artworks.length}
                ${
                  collection.artworks.length === 1
                    ? "Work"
                    : "Works"
                }
              </p>
            </div>
          </header>

          <div class="collection-grid">
            ${artworkCards}
          </div>
        </section>
      `;
    })
    .join("");

  attachArtworkEvents();
}

function attachArtworkEvents() {
  const artworkCards = document.querySelectorAll(
    ".collection-artwork"
  );

  artworkCards.forEach((card) => {
    const collectionIndex = Number(
      card.dataset.collectionIndex
    );

    const artworkIndex = Number(
      card.dataset.artworkIndex
    );

    const collection = collections[collectionIndex];
    const artwork = collection.artworks[artworkIndex];

    card.addEventListener("click", () => {
      openLightbox(
        artwork,
        collection,
        artworkIndex
      );
    });

    card.addEventListener("keydown", (event) => {
      if (
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();

        openLightbox(
          artwork,
          collection,
          artworkIndex
        );
      }
    });
  });
}

function openLightbox(
  artwork,
  collection,
  artworkIndex
) {
  if (!lightbox) {
    return;
  }

  lightboxImage.src = artwork.image;
  lightboxImage.alt = artwork.title;

  lightboxTitle.textContent = artwork.title;
  lightboxCategory.textContent = collection.title;
  lightboxDescription.textContent =
    artwork.description;

  lightboxNumber.textContent =
    `ARTWORK ${formatNumber(artworkIndex + 1)}`;

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("lightbox-open");

  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.classList.remove("lightbox-open");

  lightboxImage.src = "";
}

lightboxClose?.addEventListener(
  "click",
  closeLightbox
);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    lightbox?.classList.contains("open")
  ) {
    closeLightbox();
  }
});

menuToggle?.addEventListener("click", () => {
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

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove(
      "lightbox-open"
    );
  });
});

window.addEventListener("scroll", () => {
  siteHeader?.classList.toggle(
    "scrolled",
    window.scrollY > 40
  );
});

window.addEventListener("mousemove", (event) => {
  if (!cursorGlow) {
    return;
  }

  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

if (currentYear) {
  currentYear.textContent =
    new Date().getFullYear();
}

renderCollectionNavigation();
renderCollections();