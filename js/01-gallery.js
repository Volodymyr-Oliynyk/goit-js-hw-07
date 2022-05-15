import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const imagesGallery = document.querySelector(".gallery");
console.log(imagesGallery);

const imagesGalleryEl = images.map(
    (image) => `<li><img src=${image.url} alt='${image.alt}' width=320px/></li>`
  )
  .join("");
console.log(images);
imagesGallery.insertAdjacentHTML("beforeend", imagesGalleryEl);
