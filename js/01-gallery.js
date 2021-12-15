import { galleryItems } from './gallery-items.js';

const palleteContainer = document.querySelector('.gallery');
const cardsMarkup = createColorCardMarkup();

function createColorCardMarkup() {

    return galleryItems.map(item =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
  </a>
</div>`).join('');
}
palleteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

palleteContainer.addEventListener('click', onImageToCreateModal);
function onImageToCreateModal(event) {
    event.preventDefault();

    const selectedImage = event.target.dataset.source;
    
    const modalCreate = basicLightbox.create(`
    <img src="${selectedImage}" width = "800" heigth = "600">`);
    modalCreate.show();
    
       }

palleteContainer.addEventListener('click', onPalleteContainerClick);
   
function onPalleteContainerClick(event) {
    if (event.target.nodeName !== "IMG") { return; };
    console.log(event.target.nodeName);
      
}
