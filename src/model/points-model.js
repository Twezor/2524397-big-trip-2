import { getRandomPoints } from '../mock/points';

const POINTS_COUNT = 3;

export default class PointsModel {
  points = Array.from({length: POINTS_COUNT}, getRandomPoints);

  getPoints() {
    return this.points;
  }
}
