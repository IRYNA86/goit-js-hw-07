import { galleryItems } from './gallery-items.js';

const palleteContainer = document.querySelector('.gallery');
const cardsMarkup = createColorCardMarkup();

function createColorCardMarkup() {
    return galleryItems.map(item =>
        `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src='${item.preview}'
      alt='${item.description}'
    />
  </a>`).join('');
}
palleteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

    let image = '';
let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

palleteContainer.addEventListener('click', onImageToCreateModal);
    
    gallery.on('show.simplelightbox', function onImageToCreateModal () {
        image = 
        `<div class="gallery">
    <a href="${item.original}"><img src="
    ${item.preview}" alt="${item.description}"/></a>
   
</div>,`
    });
    console.log(image);

