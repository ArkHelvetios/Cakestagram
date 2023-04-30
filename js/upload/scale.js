const SCALE_DEFAULT = 100;
const SCALE_STEP = 25;
const ScaleRange = { MIN: 25, MAX: 100 };

const scaleControlsWrapper = document.querySelector('.img-upload__scale');
const scaleSmaller = scaleControlsWrapper.querySelector('.scale__control--smaller');
const scaleBigger = scaleControlsWrapper.querySelector('.scale__control--bigger');
const scaleInput = scaleControlsWrapper.querySelector('.scale__control--value');
const uploadedPhoto = document.querySelector('.img-upload__preview > img');

let currentValue = SCALE_DEFAULT;
scaleInput.value = `${currentValue}%`;

const changeScale = (direction) => {
  let newValue =  currentValue + (SCALE_STEP * direction);
  if (newValue > ScaleRange.MAX || newValue < ScaleRange.MIN) return;

  currentValue = newValue;
  scaleInput.value = `${currentValue}%`;
  uploadedPhoto.style.transform = `scale(${currentValue / 100})`
}

const scaleUp = () => changeScale(1);
const scaleDown = () => changeScale(-1);

const addScaling = () => {
  currentValue = SCALE_DEFAULT;
  scaleInput.value = `${currentValue}%`;
  uploadedPhoto.style.transform = `scale(${currentValue / 100})`

  scaleBigger.addEventListener('click', scaleUp);
  scaleSmaller.addEventListener('click', scaleDown);
}

const removeScaling = () => {
  scaleBigger.removeEventListener('click', scaleUp);
  scaleSmaller.removeEventListener('click', scaleDown);
}

export { addScaling, removeScaling }
