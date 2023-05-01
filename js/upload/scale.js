import { uploadedPhoto } from './upload.js';

const SCALE_DEFAULT = 100;
const SCALE_STEP = 25;
const ScaleRange = { MIN: 25, MAX: 100 };

const scaleControlsWrapper = document.querySelector('.img-upload__scale');
const scaleSmaller = scaleControlsWrapper.querySelector('.scale__control--smaller');
const scaleBigger = scaleControlsWrapper.querySelector('.scale__control--bigger');
const scaleInput = scaleControlsWrapper.querySelector('.scale__control--value');

let currentValue = 0;

const setScale = (value) => {
  currentValue = value;
  scaleInput.value = `${currentValue}%`;
  uploadedPhoto.style.transform = `scale(${currentValue / 100})`
}

const changeScale = (direction) => {
  let newValue =  currentValue + (SCALE_STEP * direction);
  if (newValue > ScaleRange.MAX || newValue < ScaleRange.MIN) return;
  setScale(newValue);
}

const scaleUp = () => changeScale(1);
const scaleDown = () => changeScale(-1);

const addScaleHandler = () => {
  setScale(SCALE_DEFAULT);

  scaleBigger.addEventListener('click', scaleUp);
  scaleSmaller.addEventListener('click', scaleDown);
}

const removeScaleHandler = () => {
  scaleBigger.removeEventListener('click', scaleUp);
  scaleSmaller.removeEventListener('click', scaleDown);
}

export { addScaleHandler, removeScaleHandler }
