'use es6';

import {Map} from 'immutable';
import moment from 'moment';

import {expect} from 'chai';

import Constants from '../src/data/Constants';
import EventsFetcher from '../src/fetcher/EventsFetcher';
import EventsSearch from '../src/data/EventsSearch';

describe('Test EventsFetcher', function() {
  let futureDate = moment().add(1, 'days').format(Constants.getDatetimeFormat());
  let fetcher = new EventsFetcher();
  it('test event fetching', function() {
    let search = Map({
      cityName: 'boston',
      stateCode: 'ma',
      datetime: futureDate
    });
    return fetcher.fetchEventsByPopularityOrderedByLowestPriceGoodDeals(search)
                  .then(events => console.log(events));
  });
});
