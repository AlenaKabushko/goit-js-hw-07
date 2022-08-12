import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

//============create elements

const galleryLightBoxRef = document.querySelector(".gallery");
console.log(galleryLightBoxRef)

function createElementToGallery(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `<li><a class="gallery__item" href="${original}">
                    <img class="gallery__image" 
                    src="${preview}" 
                    alt="${description}" />
                </a></li>`;
    }).join('');
};

const addToGallery = createElementToGallery(galleryItems);
galleryLightBoxRef.insertAdjacentHTML("beforeend", addToGallery);

//============ library

// const lightbox = new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionDelay: 250,
//     captionType: "alt",
// })
const lightbox = new SimpleLightbox('.gallery a', { 'captionsData': 'alt', 'captionDelay': '250' });
lightbox.on('show.simplelightbox');
