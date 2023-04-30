import { photoData } from './temporary-data.js';

const bigPhotoWrapper = document.querySelector('.big-picture');
const commentsWrapper = bigPhotoWrapper.querySelector('.social__comments');
const commentTemplate = commentsWrapper.querySelector('.social__comment');

const renderBigPhoto = (thumbnail) => {
  const photoID = parseInt(thumbnail.id.match(/[0-9]+/g)); // RegExp
  const photo = photoData.find((photo) => photo.id === photoID);

  const { url, description, likes, comments } = photo;
  bigPhotoWrapper.querySelector('.big-picture__img > img').src = url;
  bigPhotoWrapper.querySelector('.social__caption').textContent = description;
  bigPhotoWrapper.querySelector('.likes-count').textContent = likes;
  bigPhotoWrapper.querySelector('.comments-count').textContent = comments.length;

  const commentFragment = document.createDocumentFragment();

  photo.comments.forEach(({ id, name, avatar, message }) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentAvatar = commentElement.querySelector('.social__picture');

    commentAvatar.src = avatar;
    commentAvatar.alt = name;
    commentElement.id = `photo-${photoID}-${id}`;
    commentElement.querySelector('.social__text').textContent = message;
    commentFragment.appendChild(commentElement);
  })

  commentsWrapper.appendChild(commentFragment);
}

const clearBigPhoto = () => {
  commentsWrapper.innerHTML = '';
}

export {
  renderBigPhoto,
  clearBigPhoto,
  bigPhotoWrapper
}
