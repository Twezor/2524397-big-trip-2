import { render} from '../framework/render.js';
import PointsView from '../view/points-view.js';
import ListEmptyView from '../view/empty-list-view.js';
import SortView from '../view/sort-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils.js';

/*
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
*/

export default class PointsPresenter {

  #routePointList = new PointsView();
  #routeListEmpty = new ListEmptyView();
  #sortPoints = new SortView();

  #container = null;
  #pointsModel = null;
  #pointsPresenters = new Map();

  constructor({ container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  #boardPoints = [];
  #offers = [];
  #destinations = [];

  init(){
    this.#boardPoints = [...this.#pointsModel.points];
    this.#offers = [...this.#pointsModel.offers];
    this.#destinations = this.#pointsModel.destinations;

    if (this.#boardPoints.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    this.#renderPointList();

    this.#boardPoints.forEach((point) => this.#renderPoint({point, offers: this.#offers, destinations: this.#destinations}));
  }

  #renderNoPoints(){
    render(this.#routeListEmpty, this.#container);
  }

  #renderSort() {
    render(this.#sortPoints, this.#container);
  }

  #renderPointList() {
    render(this.#routePointList, this.#container);
  }

  #handleModeChange = () => {
    this.#pointsPresenters.forEach((presenter) => presenter.resetView());
    console.log(this.#pointsPresenters);
  };

  #onFavoriteClick = (updatedPoint) => {
    this.#boardPoints = updateItem(this.#boardPoints, updatedPoint);
    this.#pointsPresenters.get(updatedPoint.id).init({
      point: updatedPoint,
      offers: this.#offers,
      destinations: this.#destinations
    });
  };

  #renderPoint({point, offers, destinations}) {
    const pointPresenter = new PointPresenter({
      container: this.#routePointList.element,
      onFavoriteClick: this.#onFavoriteClick,
      onModeChange: this.#handleModeChange,
    });
    pointPresenter.init({point, offers, destinations});
    this.#pointsPresenters.set(point.id, pointPresenter);
  }
}
