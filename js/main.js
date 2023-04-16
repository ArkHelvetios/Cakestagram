'use strict'

const getRandomNum = (min = 0, max = 100) => {
  let result = Math.floor(Math.random() * (max - min + 1) + min);

  if ((min < 0 || max < 0) || (min == max)) return -1;
  if (min > max) [min, max] = [max, min];

  return result
};
getRandomNum()

const checkMessageLength = (message = '', maxLength = 180) => {
  return (message.length <= maxLength);
}
checkMessageLength()
