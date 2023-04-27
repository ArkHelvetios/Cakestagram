import { thumbnailsWrapper } from './photo-thumbnails.js';
import { renderBigPhoto } from './photo-popup.js';
import { isEscEvent } from './utility.js';

const popupWrapper = document.querySelector('.big-picture');
const popupCloseButton = popupWrapper.querySelector('.big-picture__cancel')
/* two below hidden for next homework */
popupWrapper.querySelector('.social__comment-count').classList.add('hidden');
popupWrapper.querySelector('.comments-loader').classList.add('hidden');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault;
    closePhotoPopup();
  }
}

const openPhotoPopup = (thumbnail) => {
  popupWrapper.classList.remove('hidden');
  renderBigPhoto(thumbnail);

  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closePhotoPopup = () => {
  popupWrapper.classList.add('hidden');

  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

thumbnailsWrapper.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('.picture');

  if (thumbnail) {
    evt.preventDefault;
    openPhotoPopup(thumbnail)
  }
});

popupCloseButton.addEventListener('click', () => {
  closePhotoPopup()
});
