import { getRandomInteger, getRandomArrayElement } from '../utils';

const mockPoints = [
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'taxi'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [],
    'type': 'Bus'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'Train'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'Ship'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'Drive'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'Flight'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'Check-in'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'Sightseeing'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': getRandomInteger(100, 1000),
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'Restaurant'
  }
];

function getRandomPoints() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoints};
