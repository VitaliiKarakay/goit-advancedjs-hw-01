import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from './gallery-images.js';

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = images
  .map(
    ({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" alt="${description}" />
    </a>
  </li>
`
  )
  .join('');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
