import { RenderPosition, remove, render, replace} from '../framework/render.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};
export default class PointPresenter {
  #container = null;
  #point = null;
  #offers = null;
  #destinations = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #escKeydownHandler = null;
  #onFavoriteClick = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;

  constructor({container, onFavoriteClick, onModeChange}) {
    this.#container = container;
    this.#onFavoriteClick = onFavoriteClick;
    this.#handleModeChange = onModeChange;
  }

  init({point, offers, destinations}) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#escKeydownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        this.#replaceEditToPoint();
        document.removeEventListener('keydown', this.#escKeydownHandler);
      }
    };

    this.#pointComponent = new PointView({
      point: this.#point,
      offers: this.#offers,
      onEditClick: () => {
        this.#replacePointToEdit();
        document.addEventListener('keydown', this.#escKeydownHandler);
      },
      onFavoriteClick: this.#favoriteStatusChange
    });

    this.#pointEditComponent = new EditPointView({
      point: this.#point,
      offers: this.#offers,
      destinations: this.#destinations,
      onFormSubmit: () => {
        this.#replaceEditToPoint();
        document.removeEventListener('keydown', this.#escKeydownHandler);
      },
      onCloseClick: () => {
        this.#replaceEditToPoint();
        document.removeEventListener('keydown', this.#escKeydownHandler);
      }
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#container, RenderPosition.AFTERBEGIN);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy(){
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceEditToPoint();
    }
  }

  #replacePointToEdit() {
    replace(this.#pointEditComponent, this.#pointComponent);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceEditToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    this.#mode = Mode.DEFAULT;
  }

  #favoriteStatusChange = () => {
    this.#onFavoriteClick({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
