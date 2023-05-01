import { isEscEvent } from '../utility.js';
import { addScaleHandler, removeScaleHandler } from './scale.js';
import { addEffectsHandler, removeEffectsHandler } from './effects.js'

const uploadWrapper = document.querySelector('.img-upload__overlay');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault;
    closePopup();
  }
}

const openPopup = () => {
  addScaleHandler();
  addEffectsHandler();

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

  removeScaleHandler();
  removeEffectsHandler();
};

export { openPopup }
