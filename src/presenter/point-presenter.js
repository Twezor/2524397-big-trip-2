import { RenderPosition, remove, render, replace} from '../framework/render.js';
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
}
