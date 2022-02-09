import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryConteiner.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
                </div>`;
    }).join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

