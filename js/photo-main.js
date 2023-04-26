import { photoData } from './photo-data.js';

const picListElement = document.querySelector('.pictures');
const randomUserPicTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picListElementFragment = document.createDocumentFragment();

photoData.forEach((photo) => {
  const picElement = randomUserPicTemplate.cloneNode(true);
  picElement.querySelector('.picture__img').src = photo.url;
  picElement.querySelector('.picture__likes').textContent = photo.likes;
  picElement.querySelector('.picture__comments').textContent = photo.comments.length;
  picListElementFragment.appendChild(picElement);
})

picListElement.appendChild(picListElementFragment);
