import { RenderPosition, render, replace} from '../framework/render.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';

export default class PointPresenter {
  #container = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #escKeydownHandler = null;

  constructor({container}) {
    this.#container = container;
  }

  init({point, offers, destinations}) {
    this.#escKeydownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        this.#replaceEditToPoint();
        document.removeEventListener('keydown', this.#escKeydownHandler);
      }
    };

    this.#pointComponent = new PointView({
      point,
      offers,
      onEditClick: () => {
        this.#replacePointToEdit();
        document.addEventListener('keydown', this.#escKeydownHandler);
      }
    });

    this.#pointEditComponent = new EditPointView({
      point,
      offers,
      destinations,
      onFormSubmit: () => {
        this.#replaceEditToPoint();
        document.removeEventListener('keydown', this.#escKeydownHandler);
      },
      onCloseClick: () => {
        this.#replaceEditToPoint();
        document.removeEventListener('keydown', this.#escKeydownHandler);
      }
    });

    render(this.#pointComponent, this.#container, RenderPosition.AFTERBEGIN);
  }

  #replacePointToEdit() {
    replace(this.#pointEditComponent, this.#pointComponent);
  }

  #replaceEditToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
  }
}
