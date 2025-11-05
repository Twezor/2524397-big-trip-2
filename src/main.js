import { RenderPosition, render } from './render.js';
import NewRouteInfo from './view/route-info-view.js';
import Filter from './view/filter-view.js';
import Sort from './view/sort-view.js';
import TripPresenter from './presenter/trip-presenter.js';


const tripMain = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const sortContainer = document.querySelector('.trip-events');
const tripEventsContainer = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({container: tripEventsContainer});

render(new NewRouteInfo(), tripMain, RenderPosition.AFTERBEGIN);
render(new Filter(), filterContainer);
render(new Sort(), sortContainer);

tripPresenter.init();
