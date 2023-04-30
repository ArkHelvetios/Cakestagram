import { photoData } from './temporary-data.js';
import { renderBigPhoto } from './render-big-photo.js';
import { popupHandler } from '../popup-handler.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsWrapper = document.querySelector('.pictures');
const thumbnailsWrapperFragment = document.createDocumentFragment();
const bigPhotoWrapper = document.querySelector('.big-picture');

photoData.forEach(({ id, url, likes, comments }) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);
  thumbnailElement.tabIndex = '0';
  thumbnailElement.id = `photo-${id}-thumbnail`;
  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
  thumbnailsWrapperFragment.appendChild(thumbnailElement);
})

thumbnailsWrapper.appendChild(thumbnailsWrapperFragment);

thumbnailsWrapper.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('.picture');

  if (thumbnail) {
    evt.preventDefault;
    openPhotoPopup(thumbnail)
  }
});

const openPhotoPopup = (thumbnail) => {
  renderBigPhoto(thumbnail, bigPhotoWrapper);
  popupHandler(bigPhotoWrapper);
};
