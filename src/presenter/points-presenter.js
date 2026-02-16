import { RenderPosition, render, replace} from '../framework/render.js';
import PointsView from '../view/points-view.js';
import PointView from '../view/point-view.js';
import PointViewEdit from '../view/point-view-edit.js';

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

  #container = null;
  #pointsModel = null;

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

    render(this.#routePointList, this.#container);

    for (let i = 0; i < this.#boardPoints.length; i++){
      this.#renderPoint({point: this.#boardPoints[i], offers: this.#offers, destinations: this.#destinations});
    }
  }

  #renderPoint({point, offers, destinations}) {

    const escKeydownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replacePointEditToPoint();
        document.removeEventListener('keydown', escKeydownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      offers,
      onEditClick: () => {
        replacePointToPointEdit();
        document.addEventListener('keydown', escKeydownHandler);
      }
    });

    const pointEditComponent = new PointViewEdit({
      point,
      offers,
      destinations,
      onFormSubmit: () => {
        replacePointEditToPoint();
        document.removeEventListener('keydown', escKeydownHandler);
      }
    });

    function replacePointToPointEdit() {
      replace(pointEditComponent, pointComponent);
    }

    function replacePointEditToPoint() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#routePointList.element, RenderPosition.AFTERBEGIN);
  }
}

