import { RenderPosition, remove, render, replace} from '../framework/render.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';

export default class PointPresenter {
  #container = null;
  #point = null;
  #offers = null;
  #destinations = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #escKeydownHandler = null;
  #onFavoriteClick = null;

  constructor({container, onFavoriteClick}) {
    this.#container = container;
    this.#onFavoriteClick = onFavoriteClick;
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

    if (this.#container.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#container.contains(prevPointEditComponent.element)) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy(){
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  #replacePointToEdit() {
    replace(this.#pointEditComponent, this.#pointComponent);
  }

  #replaceEditToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
  }

  #favoriteStatusChange = () => {
    this.#onFavoriteClick({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
