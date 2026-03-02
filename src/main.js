import { RenderPosition, render } from './framework/render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import PointsPresenter from './presenter/points-presenter.js';
import PointsModel from './model/points-model.js';


const tripMain = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const pointsPresenter = new PointsPresenter({container: tripEventsContainer, pointsModel});

render(new TripInfoView(), tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterContainer);

pointsPresenter.init();
