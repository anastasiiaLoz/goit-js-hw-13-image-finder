import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onGalleryElClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const img = `<img src=${e.target.dataset.source} alt="picture" />`;
  const createdImg = basicLightbox.create(img);

  createdImg.show();
}
export { onGalleryElClick };    // <==== Деструктуризация функции, для того чтоб мы могли ее использовать во внешнем коде
// Вместо этого можно было сделать на 4-й строке export default function onGalleryElClick(e){}... и не писать 16-ю совсем 