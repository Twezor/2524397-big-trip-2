import { RenderPosition, render } from './render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import PointsPresenter from './presenter/points-presenter.js';
import PointsModel from './model/points-model.js';


const tripMain = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const sortContainer = document.querySelector('.trip-events');
const tripEventsContainer = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const pointsPresenter = new PointsPresenter({container: tripEventsContainer, pointsModel});

render(new TripInfoView(), tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterContainer);
render(new SortView(), sortContainer);

pointsPresenter.init();
