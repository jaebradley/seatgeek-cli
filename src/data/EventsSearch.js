'use es6';

import {Record} from 'immutable';
import moment from 'moment';
import {Taxonomy} from 'seatgeek-client';

let defaults = {
  cityName: undefined,
  stateCode: undefined,
  countryCode: undefined,
  datetime: moment.utc()
                  .add(3, 'months')
                  .format('YYYY-MM-DDTHH:mm:ss'),
};

export default class EventsSearch extends Record(defaults) {
};
