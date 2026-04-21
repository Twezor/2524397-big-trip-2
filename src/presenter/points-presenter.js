import { render} from '../framework/render.js';
import PointsView from '../view/points-view.js';
import ListEmptyView from '../view/empty-list-view.js';
import SortView from '../view/sort-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem, sortByTime, sortByDate, sortByPrice } from '../utils.js';
import { SortType } from '../const.js';

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
  #sortPoints = null;

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
  #currentSortType = SortType.SORT_BY_DATE;

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
    this.#sortPointsList(this.#currentSortType);

    this.#boardPoints.forEach((point) => this.#renderPoint({point, offers: this.#offers, destinations: this.#destinations}));
  }

  #renderNoPoints(){
    render(this.#routeListEmpty, this.#container);
  }

  #sortPointsList(sortType){

    switch(sortType){
      case SortType.SORT_BY_DATE:
        this.#boardPoints.sort(sortByDate);
        break;
      case SortType.SORT_BY_TIME:
        this.#boardPoints.sort(sortByTime);
        break;
      case SortType.SORT_BY_PRICE:
        this.#boardPoints.sort(sortByPrice);
        break;
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPointsList(sortType);
    this.#clearPointsList();
    this.#boardPoints.forEach((point) => this.#renderPoint({point, offers: this.#offers, destinations: this.#destinations}));
  };

  #renderSort() {
    this.#sortPoints = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortPoints, this.#container);
  }

  #clearPointsList(){
    this.#pointsPresenters.forEach((presenter) => presenter.destroy());
    this.#pointsPresenters.clear();
  }

  #renderPointList() {
    render(this.#routePointList, this.#container);
  }

  #handleModeChange = () => {
    this.#pointsPresenters.forEach((presenter) => presenter.resetView());
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
