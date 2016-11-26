'use es6';

import {expect} from 'chai';

import EventsFetcher from '../src/fetcher/EventsFetcher';

describe('Test EventsFetcher', function() {
  it('test event fetching', function() {
    return EventsFetcher.fetchEvents('Boston', 'MA')
                        .then(events => console.log(events));
  });
});
