'use es6';

import {expect} from 'chai';

import EventsFetcher from '../src/fetcher/EventsFetcher';
import EventsSearch from '../src/data/EventsSearch';

describe('Test EventsFetcher', function() {
  let fetcher = new EventsFetcher();
  it('test event fetching', function() {
    let search = {
      cityName: 'boston',
      stateCode: 'ma',
      datetime: '2017-01-01T00:00:00'
    };
    return fetcher.fetchEventsByPopularityOrderedByLowestPriceGoodDeals(search)
                  .then(events => console.log(events));
  });
});
