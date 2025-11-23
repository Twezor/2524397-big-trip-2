import { createElement } from '../render.js';

function createRouteList() {
  return ('<ul class="trip-events__list"></ul>');
}

export default class PointsView {
  getTemplate() {
    return createRouteList();
  }

  getElement(){
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
