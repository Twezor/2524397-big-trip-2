import { RenderPosition, render } from '../render.js';
import PointsView from '../view/points-view.js';
import PointView from '../view/point-view.js';
import NewPointView from '../view/new-point-view.js';

export default class PointsPresenter {
  routePointList = new PointsView();

  constructor({ container, pointsModel}) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init(){
    this.boardPoints = [...this.pointsModel.getPoints()];
    this.offers = [...this.pointsModel.getOffers()];
    this.destintations = this.pointsModel.getDestintations();

    render(new NewPointView(this.offers), this.routePointList.getElement(), RenderPosition.AFTERBEGIN);
    render(this.routePointList, this.container);

    for (let i = 0; i < this.boardPoints.length; i++){
      render(new PointView({point: this.boardPoints[i]}, this.offers), this.routePointList.getElement());
    }
  }
}

