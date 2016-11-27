'use es6';

import {Record} from 'immutable';

import Constants from './Constants';
import VenueDetails from './VenueDetails';

let defaults = {
  id: 0,
  averagePrice: 0,
  lowestPriceGoodDeals: 0,
  lowestPrice: 0,
  highestPrice: 0,
  title: '',
  score: 0,
  localDatetime: Constants.getDatetime(),
  venue: new VenueDetails(),
  type: '',
}

export default class EventDetails extends Record(defaults){
}
