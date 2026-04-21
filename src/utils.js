import dayjs from 'dayjs';

const DATE_FORMAT = 'D MMM';
const TIME_FORMAT = 'HH:mm';

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

function humanizeTime(date) {
  return date ? dayjs(date).format(TIME_FORMAT) : '';
}

function eventMinuteDuration(dateTo, dateFrom) {
  return dayjs(dateTo).diff(dayjs(dateFrom), 'minute');
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

function sortByDate(pointA, pointB) {
  return dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));
}

function sortByTime(pointA, pointB) {
  return eventMinuteDuration(pointA.dateTo, pointA.dateFrom) - eventMinuteDuration(pointB.dateTo, pointB.dateFrom);
}

function sortByPrice(pointA, pointB) {
  return pointA.basePrice - pointB.basePrice;
}

export {getRandomArrayElement, getRandomInteger, humanizeDate, humanizeTime, eventMinuteDuration, updateItem, sortByTime, sortByDate, sortByPrice};
