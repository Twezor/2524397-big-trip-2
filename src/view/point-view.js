import AbstractView from '../framework/view/abstract-view.js';
import { humanizeDate, humanizeTime } from '../utils.js';

function createOffersTemplate(checkedOffers){


  if (!checkedOffers || checkedOffers.length === 0) {
    return '';
  }

  const offersItems = checkedOffers.map((checkedOffer) =>
    `<li class="event__offer">
      <span class="event__offer-title">${checkedOffer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${checkedOffer.price}</span>
    </li>`
  ).join('');

  return (
    `<h4 class="visually-hidden">Offers:</h4>
     <ul class="event__selected-offers">
       ${offersItems}
     </ul>`
  );
}

function createPoint(point, allOffers, favoritStatus) {
  const {type, basePrice, dateFrom, dateTo, offers: selectedOfferIds} = point;
  const currentTypeOffers = allOffers.find((offer) => offer.type === type);
  const checkedOffers = currentTypeOffers.offers.filter((offer) => selectedOfferIds.includes(offer.id));
  const offersTemplate = createOffersTemplate(checkedOffers);
  const dateEventFrom = humanizeDate(dateFrom);
  const dateEventTo = humanizeDate(dateTo);
  const timeEventFrom = humanizeTime(dateFrom);
  const timeEventTo = humanizeTime(dateTo);

  return (`
    <li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="2019-03-18">${dateEventFrom}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/check-in.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} Chamonix</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T12:25">${timeEventFrom}</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T13:35">${timeEventTo}</time>
      </p>
      <p class="event__duration">40M</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    ${offersTemplate}
    <button class="event__favorite-btn event__favorite-btn--${favoritStatus}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>
`);
}

export default class PointView extends AbstractView {

  #point = null;
  #offers = null;
  #onEditButtonClick = null;
  #onFavoriteClick = null;

  constructor ({point, offers, onEditClick, onFavoriteClick}) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.#onEditButtonClick = onEditClick;
    this.#onFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#handleEditClick);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#handleFavoriteClick);
  }

  get template() {
    const favoritStatus = this.#point.isFavorite ? 'active' : 'unactive';
    return createPoint(this.#point, this.#offers, favoritStatus);
  }

  #handleEditClick = (evt) => {
    evt.preventDefault();
    this.#onEditButtonClick();
  };

  #handleFavoriteClick = (evt) => {
    evt.preventDefault();
    this.#onFavoriteClick();
  };
}
