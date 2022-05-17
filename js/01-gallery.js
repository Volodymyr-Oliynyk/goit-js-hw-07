import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
const galleryItemsList = galleryItems;

const imagesList = galleryItemsList
  .map((element) => {
    const { preview, original, description } = element;

    return `<div class="gallery">
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
</a>  
  </div>`;
  })
  .join("");

galleryList.insertAdjacentHTML("afterbegin", imagesList);

galleryList.addEventListener("click", openModalClick);

let instance = null;

function openModalClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(
    `<div> 
    <img src=${event.target.dataset.source}>
    </div>`,

    {
      onShow: () => {
        window.addEventListener("keydown", onEscapePress);
      },

      onClose: () => {
        window.removeEventListener("keydown", onEscapePress);
      },
    }
  );
  instance.show();
}

function onEscapePress(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
