import { getRandomNum } from './utility.js';

const OBJECTS_COUNT = 25;
const LikesRange = { MIN: 14, MAX: 200 };
const CommentsRange = { MIN: 1, MAX: 5 };
const CommentsIDsRange = { MIN: 1, MAX: 999};
const AvatarsIDsRange = { MIN: 1, MAX: 6 }

const descriptions = [
  'Кошка вполне может быть лучшим другом человека, но никогда не опустится до того, чтобы это признать.',
  'Говорят, что кошки трусливы, злы и жестоки. Это верно, и у них еще много других достоинств.',
  'Женщины и кошки не идут, когда их зовут, и приходят, когда их не звали.',
  'Я долго изучал философов и долго изучал кошек. Кошки бесконечно мудрее.',
  'Люди, которые не выносят кошек, в своей следующей жизни будут мышами.',
  'Кошки созданы, чтобы показать нам: не все в природе имеет назначение.',
  'Кошка никогда не допустит, чтобы ее увидели в нефотогеничной позе.',
  'Как знает каждый владелец кошки, кошка не может иметь владельца.',
  'Если бы кошки умели говорить, они бы все равно молчали.',
  'Любить кошку можно только на ее собственных условиях.',
];

const names = [
  'Кирилл Федоров',
  'Кира Исаева',
  'Виктория Карпова',
  'Александра Уварова',
  'Матвей Новиков',
  'Алия Васильева',
  'Алина Романова',
  'Дарья Овчинникова',
  'Михаил Тимофеев',
  'Елизавета Поликарпова',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

let photoData = [];

const createComments = () => {
  let commentsData = [];

  for (let i = 1; i <= getRandomNum(CommentsRange.MIN, CommentsRange.MAX); i++) {
    commentsData.push({
      id: getRandomNum(CommentsIDsRange.MIN, CommentsIDsRange.MAX),
      name: names[getRandomNum(0, names.length)],
      avatar: `img/avatar-${getRandomNum(AvatarsIDsRange.MIN, AvatarsIDsRange.MAX)}.svg`,
      message: messages[getRandomNum(0, messages.length - 1)],
    })
  }

  return commentsData
};

const createPhoto = () => {
  for (let i = 1; i <= OBJECTS_COUNT; i++) {
    photoData.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: descriptions[getRandomNum(0, descriptions.length - 1)],
      likes: getRandomNum(LikesRange.MIN, LikesRange.MAX),
      comments: createComments(),
    })
  }
};

createPhoto();

export { photoData };
