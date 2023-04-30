import { isEscEvent } from './utility.js';

export const popupHandler = (wrapper) => {
  const closeButton = wrapper.querySelector('.cancel');

  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault;
      closePopup();
    }
  }

  wrapper.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);

  const closePopup = () => {
    wrapper.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
  };

  closeButton.addEventListener('click', () => {
    closePopup()
  });
}
