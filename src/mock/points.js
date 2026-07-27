import { getRandomInteger, getRandomArrayElement } from '../utils';

const mockPoints = [
  {
    'id': 'point-1',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-10T23:51:13.375Z',
    'destination': 'amsterdam-destination-1',
    'isFavorite': false,
    'offers': [
      'taxi-offer-1',
      'taxi-offer-2'
    ],
    'type': 'taxi'
  },
  {
    'id': 'point-2',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-11T01:55:56.845Z',
    'dateTo': '2019-07-11T02:45:13.375Z',
    'destination': 'amsterdam-destination-1',
    'isFavorite': false,
    'offers': [
      'bus-offer-1',
      'bus-offer-2',
    ],
    'type': 'bus'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c3',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-11T03:55:56.845Z',
    'dateTo': '2019-07-11T04:11:13.375Z',
    'destination': 'amsterdam-destination-1',
    'isFavorite': false,
    'offers': [
      'train-offer-1',
      'train-offer-4'
    ],
    'type': 'train'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c4',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-11T05:55:56.845Z',
    'dateTo': '2019-07-11T06:16:13.375Z',
    'destination': 'geneva-destination-2',
    'isFavorite': false,
    'offers': [
      'ship-offer-1'
    ],
    'type': 'ship'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c5',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-11T07:55:56.845Z',
    'dateTo': '2019-07-11T08:22:13.375Z',
    'destination': 'geneva-destination-2',
    'isFavorite': false,
    'offers': [
      'drive-offer-1'
    ],
    'type': 'drive'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c6',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-11T09:55:56.845Z',
    'dateTo': '2019-07-11T10:33:13.375Z',
    'destination': 'geneva-destination-2',
    'isFavorite': false,
    'offers': [
      'flight-offer-1'
    ],
    'type': 'flight'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c7',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-08T11:55:56.845Z',
    'dateTo': '2019-07-08T12:05:13.375Z',
    'destination': 'chamonix-destination-3',
    'isFavorite': false,
    'offers': [],
    'type': 'check-in'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c8',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-10T13:55:56.845Z',
    'dateTo': '2019-07-10T14:14:13.375Z',
    'destination': 'chamonix-destination-3',
    'isFavorite': false,
    'offers': [
      'sightseeing-offer-1'
    ],
    'type': 'sightseeing'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c9',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-09T15:55:56.845Z',
    'dateTo': '2019-07-09T16:58:13.375Z',
    'destination': 'chamonix-destination-3',
    'isFavorite': false,
    'offers': [
      'restaurant-offer-1'
    ],
    'type': 'restaurant'
  }
];

const usedPointIds = new Set();

function getRandomPoint() {
  const availablePoints = mockPoints.filter((point) => !usedPointIds.has(point.id));
  const randomPoint = getRandomArrayElement(availablePoints);
  usedPointIds.add(randomPoint.id);
  return randomPoint;
}

export {getRandomPoint};
