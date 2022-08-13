import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

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

function openModal(event) {
    event.preventDefault()

    if (event.target.classList.contains("gallery")) {
        return
    }

    const instance = basicLightbox.create(`
		<img src="${event.target.dataset.source}">
	`)

    instance.show()

    function closeModal(e) {
        if (e.key === "Escape") {
            instance.close()
        }
    }
    
    document.addEventListener("keydown", closeModal)
}

galleryRef.addEventListener("click", openModal);

