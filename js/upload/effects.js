import { uploadedPhoto } from './upload.js';

const form = document.querySelector('.img-upload__form')
/* const levelValue = form.querySelector('.effect-level__value');
const levelSlider = form.querySelector('.effect-level__slider'); */

const effectChangeHandler = (evt) => {
  if (evt.target.matches('input[name="effect"]')) {
    uploadedPhoto.className = '';
    uploadedPhoto.classList.add(`effects__preview--${evt.target.value}`)
  }
};

const addEffectsHandler = () => {

  form.addEventListener('change', effectChangeHandler);
}

const removeEffectsHandler = () => {
  uploadedPhoto.className = '';
  form.removeEventListener('change', effectChangeHandler);
}

export { addEffectsHandler, removeEffectsHandler }
