import { photoData } from './temporary-data.js';

export const renderBigPhoto = (thumbnail, wrapper) => {
  const photoID = parseInt(thumbnail.id.match(/[0-9]+/g)); // RegExp
  const photo = photoData.find((photo) => photo.id == photoID);

  const { url, description, likes, comments } = photo;
  wrapper.querySelector('.big-picture__img > img').src = url;
  wrapper.querySelector('.social__caption').textContent = description;
  wrapper.querySelector('.likes-count').textContent = likes;
  wrapper.querySelector('.comments-count').textContent = comments.length;

  const commentsWrapper = wrapper.querySelector('.social__comments');
  const commentTemplate = commentsWrapper.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();

  commentsWrapper.innerHTML = '';

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
