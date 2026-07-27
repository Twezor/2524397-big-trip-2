import { getRandomInteger } from '../utils';

export const mockOffers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 'taxi-offer-1',
        'title': 'Business class',
        'price': getRandomInteger(500, 800)
      },
      {
        'id': 'taxi-offer-2',
        'title': 'With a pet',
        'price': getRandomInteger(100, 200)
      },
      {
        'id': 'taxi-offer-3',
        'title': 'With a child',
        'price': getRandomInteger(100, 300)
      },
      {
        'id': 'taxi-offer-4',
        'title': 'Premium class',
        'price': getRandomInteger(800, 1000)
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': 'bus-offer-1',
        'title': 'With a pet',
        'price': getRandomInteger(100, 300)
      },
      {
        'id': 'bus-offer-2',
        'title': 'Business class',
        'price': getRandomInteger(700, 1000)
      },
      {
        'id': 'bus-offer-3',
        'title': 'Large luggage',
        'price': getRandomInteger(200, 500)
      },
      {
        'id': 'bus-offer-4',
        'title': 'Choose seats',
        'price': getRandomInteger(100, 300)
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': 'train-offer-1',
        'title': 'With a pet',
        'price': getRandomInteger(100, 300)
      },
      {
        'id': 'train-offer-2',
        'title': 'Business class',
        'price': getRandomInteger(700, 1000)
      },
      {
        'id': 'train-offer-3',
        'title': 'Individual meals',
        'price': getRandomInteger(200, 300)
      },
      {
        'id': 'train-offer-4',
        'title': 'Choose seats',
        'price': getRandomInteger(100, 200)
      }
    ]
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': 'ship-offer-1',
        'title': 'Individual meals',
        'price': getRandomInteger(100, 500)
      },
      {
        'id': 'ship-offer-2',
        'title': 'Business class',
        'price': getRandomInteger(700, 1000)
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': 'drive-offer-1',
        'title': 'Business class',
        'price': getRandomInteger(100, 400)
      },
      {
        'id': 'drive-offer-2',
        'title': 'Premium class',
        'price': getRandomInteger(700, 1000)
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': 'flight-offer-1',
        'title': 'Individual meals',
        'price': getRandomInteger(100, 500)
      },
      {
        'id': 'flight-offer-2',
        'title': 'Business class',
        'price': getRandomInteger(700, 1000)
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': []
  },
  {
    'type': 'sightseeing',
    'offers': [
      {
        'id': 'sightseeing-offer-1',
        'title': 'Medium tour',
        'price': getRandomInteger(100, 500)
      },
      {
        'id': 'sightseeing-offer-1',
        'title': 'Large tour',
        'price': getRandomInteger(700, 1000)
      }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      {
        'id': 'restaurant-offer-1',
        'title': 'Medium set',
        'price': getRandomInteger(800, 1000)
      },
      {
        'id': 'restaurant-offer-2',
        'title': 'Premium set',
        'price': getRandomInteger(100, 500)
      },
    ]
  },
];
