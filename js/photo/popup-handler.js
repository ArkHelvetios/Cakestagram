import { isEscEvent } from '../utility.js';
import { renderBigPhoto, clearBigPhoto, bigPhotoWrapper } from './render-big-photo.js';

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault;
    closePopup();
  }
};

const openPopup = (thumbnail) => {
  renderBigPhoto(thumbnail);

  bigPhotoWrapper.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);

  const closeButton = bigPhotoWrapper.querySelector('.cancel');
  closeButton.addEventListener('click', () => {
    closePopup()
  });
};

const closePopup = () => {
  bigPhotoWrapper.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);

  clearBigPhoto()
}

export { openPopup }
