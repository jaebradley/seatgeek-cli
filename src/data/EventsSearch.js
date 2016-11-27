'use es6';

import {Record} from 'immutable';
import moment from 'moment';
import {Taxonomy} from 'seatgeek-client';

import Constants from './Constants';

let defaults = {
  cityName: undefined,
  stateCode: undefined,
  countryCode: undefined,
  datetime: Constants.getDatetime(),
};

export default class EventsSearch extends Record(defaults) {
};
