import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector('.gallery');
console.log('galleryList:>> ', galleryList);
const galleryItemsList = galleryItems;

const imagesList = galleryItemsList.map(element => {
  const {preview, original, description} = element;

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
 .join('');

 galleryList.insertAdjacentHTML('afterbegin', imagesList);
console.log('imagesList :>>', imagesList);


// import * as basicLightbox from 'basiclightbox'

const instance = imagesList.create(imagesList);

instance.show()

// const galeryItemList = galleryItems;
// console.log('object :>> ', galeryItemList);
// const imagesGallery = document.querySelector(".gallery");
// console.log(imagesGallery);

// const imagesGalleryEl = galleryItems.map({image} => 
  
//   console.log(image));

