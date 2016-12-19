'use es6';

import {Map} from 'immutable';

import {expect} from 'chai';

import EventsFetcher from '../src/fetcher/EventsFetcher';
import EventsSearch from '../src/data/EventsSearch';

describe('Test EventsFetcher', function() {
  let fetcher = new EventsFetcher();
  it('test event fetching', function() {
    let search = Map({
      cityName: 'boston',
      stateCode: 'ma',
      datetime: '2017-01-01T00:00:00'
    });
    return fetcher.fetchEventsByPopularityOrderedByLowestPriceGoodDeals(search)
                  .then(events => console.log(events));
  });
});
