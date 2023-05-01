import { openPopup } from './popup-handler.js';

const form = document.querySelector('.img-upload__form')
const uploadInput = form.querySelector('.img-upload__input');
const uploadedPhoto = form.querySelector('.img-upload__preview > img');

uploadInput.addEventListener('change', () => {
  uploadedPhoto.addEventListener('load', () => {
    URL.revokeObjectURL(uploadedPhoto.src)
  });

  uploadedPhoto.src = URL.createObjectURL(uploadInput.files[0]);
  openPopup();
});

export { form, uploadedPhoto }
