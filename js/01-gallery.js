import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
console.log(galleryRef)

//create elements===========================================================

// for (const galleryItem of galleryItems) {
//     const { preview, original, description } = galleryItem;

//     const addToGallery = [];

//     const galleryItemRef = document.createElement("div");
//     galleryItemRef.classList.add("gallery__item")

//     const galleryLinkRef = document.createElement("a");
//     galleryLinkRef.classList.add("gallery__link")
//     galleryLinkRef.setAttribute("href", `${original}`);

//     const galleryImageRef = document.createElement("img");
//     galleryImageRef.classList.add("gallery__image");
//     galleryImageRef.setAttribute("src", `${preview}`);
//     galleryImageRef.setAttribute("data-source", `${original}`);
//     galleryImageRef.setAttribute("alt", `${description}`);

//     galleryItemRef.appendChild(galleryLinkRef);
//     galleryLinkRef.appendChild(galleryImageRef);

//     //console.log(galleryItemRef);

//     addToGallery.push(galleryItemRef);
//     galleryRef.append(...addToGallery);
// }

function createElementToGallery(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`;
    }).join('');
};

const addToGallery = createElementToGallery(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", addToGallery);

//library======================

function openModal(event) {
    event.preventDefault()

    if (event.target.classList.contains("gallery")) {
        return
    }

    // console.log('open modal');
    // console.log(event.target);
    // console.log(event.target.classList.contains("gallery"));

    const instance = basicLightbox.create(`
		<img src="${event.target.dataset.source}">
	`)

    instance.show()

    function closeModal(e) {
        if (e.key === "Escape") {
            //console.log("ravno")
            instance.close()
        }
    }
    
    document.addEventListener("keydown", closeModal)

}

galleryRef.addEventListener("click", openModal);

