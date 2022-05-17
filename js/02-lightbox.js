import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
const galleryItemsList = galleryItems;

const imagesList = galleryItemsList
  .map((element) => {
    const { preview, original, description } = element;

    return `<li>
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
   alt="${description}"
  />
</a> 
</li>`;
  })
  .join("");

galleryList.insertAdjacentHTML("afterbegin", imagesList);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250ms",
});
console.log(lightbox);