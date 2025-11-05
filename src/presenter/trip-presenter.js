import { RenderPosition, render } from '../render.js';
import RouteList from '../view/route-list-view.js';
import RoutePoint from '../view/route-point-view.js';
import EditForm from '../view/edit-form-view.js';

const ROUTE_POINTS_QUANTITY = 3;

export default class TripPresenter {
  routePointList = new RouteList();

  constructor({ container }) {
    this.container = container;
  }

  init(){
    render(this.routePointList, this.container);

    for (let i = 0; i < ROUTE_POINTS_QUANTITY; i++){
      render(new RoutePoint(), this.routePointList.getElement());
    }

    render(new EditForm(), this.routePointList.getElement(), RenderPosition.AFTERBEGIN);
  }
}

