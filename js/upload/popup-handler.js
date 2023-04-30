import { isEscEvent } from '../utility.js';
import { addScaling, removeScaling } from './scale.js';

const uploadWrapper = document.querySelector('.img-upload__overlay');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault;
    closePopup();
  }
}

const openPopup = () => {
  addScaling();

  uploadWrapper.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);

  const closeButton = uploadWrapper.querySelector('.cancel');
  closeButton.addEventListener('click', () => {
    closePopup()
  });
};

const closePopup = () => {
  uploadWrapper.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);

  removeScaling();
};

export { openPopup }
