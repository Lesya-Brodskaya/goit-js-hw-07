import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryEl = galleryItems
  .map(
    (item) => `
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"/>
    </a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryEl);

const lightbox = new SimpleLightbox(".gallery a", {
  captionData: "alt",
  captionDelay: 250,
});


