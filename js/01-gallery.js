import { galleryItems } from './gallery-items.js';

const palleteContainer = document.querySelector('.gallery');
const cardsMarkup = createColorCardMarkup();
let currentIndex = 0;
function createColorCardMarkup() {

    return galleryItems.map((item, index) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      data-index="${index}"
      alt='${item.description}'
    />
  </a>
</div>`).join('');
}
palleteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

palleteContainer.addEventListener('click', onImageToCreateModal);

const options = {
  onShow: () => { console.log("open");
  window.addEventListener('keydown', pressKey);
},
  onClose: () => {
    console.log("close");
    window.removeEventListener('keydown', pressKey);
  }

}

const instance = basicLightbox.create
  (`<img class = 'modal-ing' src="">`, options);

function onImageToCreateModal(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") { return; };
  console.log(event.target.nodeName);

currentIndex = Number(event.target.dataset.index);
  setImg(event.target.dataset.source);
  instance.show();
}
function setImg(url) {
   instance.element().querySelector('img').src = url
}
function pressKey({ code }) {
  switch (code) {
    case 'Escape':
      instance.close();
      break;
    case 'ArrowRight':
      currentIndex += 1;
      if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
      }
      console.log(currentIndex);
      setImg(galleryItems[currentIndex].original);
      break;
    case 'ArrowLeft':
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
      }
     setImg(galleryItems[currentIndex].original);
      break;
    default:
      console.log(Error);
      break;
  }
}
  








// function onEscClick(evt) {
//   if (evt.code === 'Escape') {
//     instance.close();
//     return;
//   }
//   if (evt.code === "ArrowRight") {
//     currentIndex += 1;
//      if (currentIndex >= galleryItems.length) {
//       currentIndex = 0;
//     }
//     console.log(currentIndex);
//     instance.element().querySelector('img').src = galleryItems[currentIndex].original;
//       }
//   if (evt.code === "ArrowLeft") {
//     currentIndex -= 1;
//     if (currentIndex < 0) {
//       currentIndex = galleryItems.length - 1;
//     }
//     console.log(currentIndex);
//      instance.element().querySelector('img').src = galleryItems[currentIndex].original;
//   }
// }
  

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
