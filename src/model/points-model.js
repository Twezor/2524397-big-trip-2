import { getRandomPoints } from '../mock/points';
import { mockOffers } from '../mock/offers';
import { mockDestinations } from '../mock/destinations';

const POINTS_COUNT = 3;

export default class PointsModel {
  #points = Array.from({length: POINTS_COUNT}, getRandomPoints);
  #offers = mockOffers;
  #destinations = mockDestinations;

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}
