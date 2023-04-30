import { popupHandler } from './popup-handler.js';

const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const uploadWrapper = form.querySelector('.img-upload__overlay');
const uploadedPhoto = uploadWrapper.querySelector('.img-upload__preview > img');

uploadInput.addEventListener('change', () => {
  uploadedPhoto.addEventListener('load', () => {
    URL.revokeObjectURL(uploadedPhoto.src)
  });

  uploadedPhoto.src = URL.createObjectURL(uploadInput.files[0]);
  popupHandler(uploadWrapper);
});

