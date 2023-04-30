import { openPopup } from './popup-handler.js';

const uploadInput = document.querySelector('.img-upload__input');
const uploadedPhoto = document.querySelector('.img-upload__preview > img');

uploadInput.addEventListener('change', () => {
  uploadedPhoto.addEventListener('load', () => {
    URL.revokeObjectURL(uploadedPhoto.src)
  });

  uploadedPhoto.src = URL.createObjectURL(uploadInput.files[0]);
  openPopup();
});
