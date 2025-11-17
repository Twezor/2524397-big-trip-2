import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function humanizeDate(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

export {getRandomArrayElement, getRandomInteger, humanizeDate};
