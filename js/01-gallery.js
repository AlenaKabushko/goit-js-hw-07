import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
//console.log(galleryRef)

//create elements===========================================================

for (const galleryItem of galleryItems) {
    const { preview, original, description } = galleryItem;

    const addToGallery = [];

    const galleryItemRef = document.createElement("div");
    galleryItemRef.classList.add("gallery__item")

    const galleryLinkRef = document.createElement("a");
    galleryLinkRef.classList.add("gallery__link")
    galleryLinkRef.setAttribute("href", `${original}`);

    const galleryImageRef = document.createElement("img");
    galleryImageRef.classList.add("gallery__image");
    galleryImageRef.setAttribute("src", `${preview}`);
    galleryImageRef.setAttribute("data-source", `${original}`);
    galleryImageRef.setAttribute("alt", `${description}`);

    galleryItemRef.appendChild(galleryLinkRef);
    galleryLinkRef.appendChild(galleryImageRef);

    //console.log(galleryItemRef);

    addToGallery.push(galleryItemRef);
    galleryRef.append(...addToGallery);
}









