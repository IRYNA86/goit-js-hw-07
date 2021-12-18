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

const instance = basicLightbox.create
  (`<img class = 'modal-ing' src="">`, {
    onShow: instance => {
  window.addEventListener('keydown', onEscClick);
},
    onClose: instance => {
  window.removeEventListener('keydown', onEscClick);
},});

function onImageToCreateModal(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") { return; };
  console.log(event.target.nodeName);

  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
}
function onEscClick(evt) {
  if (evt.code === 'Escape') {
    instance.close();
    return;
  }
}
  

//     const selectedImage = event.target.dataset.source;
    
//     const modalCreate = basicLightbox.create(`
//     <img src="${selectedImage}" width = "800" heigth = "600">`);
//     modalCreate.show();
    
//    palleteContainer.addEventListener('click', onPalleteContainerClick);
// function onPalleteContainerClick(event) {
//     if (event.target.nodeName !== "IMG") { return; };
//     console.log(event.target.nodeName);
      
// }
//    palleteContainer.addEventListener('keydown', ESCclose);
// function ESCclose(evt) {
//   if (evt.code === 'Escape') {
//         modalCreate.close()
//   }
// }
//        }
