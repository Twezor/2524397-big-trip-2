import { RenderPosition, render } from '../framework/render.js';
import PointsView from '../view/points-view.js';
import PointView from '../view/point-view.js';
import NewPointView from '../view/new-point-view.js';

const defaultPoint = {
  'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c0',
  'basePrice': 0,
  'dateFrom': '2019-07-10T22:55:56.845Z',
  'dateTo': '2019-07-11T11:22:13.375Z',
  'destination': '',
  'isFavorite': false,
  'offers': [],
  'type': 'flight'
};

export default class PointsPresenter {
  #routePointList = new PointsView();

  #container = null;
  #pointsModel = null;

  constructor({ container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  #boardPoints = [];
  #offers = [];
  #destintations = [];

  init(){
    this.#boardPoints = [...this.#pointsModel.points];
    this.#offers = [...this.#pointsModel.offers];
    this.#destintations = this.#pointsModel.destintations;

    render(new NewPointView(defaultPoint, this.#offers, this.#destintations), this.#routePointList.element, RenderPosition.AFTERBEGIN);
    render(this.#routePointList, this.#container);

    for (let i = 0; i < this.#boardPoints.length; i++){
      render(new PointView({point: this.#boardPoints[i]}, this.#offers), this.#routePointList.element);
    }
  }
}

