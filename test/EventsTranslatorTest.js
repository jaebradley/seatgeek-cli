'use es6';

import {expect} from 'chai';

import VenueDetails from '../src/data/VenueDetails';
import EventDetails from '../src/data/EventDetails';
import EventsTranslator from '../src/translators/EventsTranslator';

describe('Tests Events Translator', function() {
  let id1 = 1;
  let averagePrice1 = 2;
  let lowestPriceGoodDeals1 = 3;
  let lowestPrice1 = 4;
  let highestPrice1 = 5;
  let title1 = 'jae';
  let score1 = 6;
  let datetimeLocal1 = 7;
  let venueName1 = 'bae';
  let venueExtendedAddress1 = 'badley';
  let venueStreetAddress1 = 'jadley';
  let type1 = 'foo';
  let event1 = {
    id: id1,
    stats: {
      average_price: averagePrice1,
      lowest_price_good_deals: lowestPriceGoodDeals1,
      lowest_price: lowestPrice1,
      highest_price: highestPrice1
    },
    venue: {
      name: venueName1,
      extended_address: venueExtendedAddress1,
      address: venueStreetAddress1,
    },
    title: title1,
    score: score1,
    datetime_local: datetimeLocal1,
    type: type1,
  };

  let id2 = 8;
  let averagePrice2 = 9;
  let lowestPriceGoodDeals2 = 10;
  let lowestPrice2 = 11;
  let highestPrice2 = 12;
  let title2 = 'kae';
  let score2 = 13;
  let datetimeLocal2 = 14;
  let venueName2 = 'lae';
  let venueExtendedAddress2 = 'kadley';
  let venueStreetAddress2 = 'ladley';
  let type2 = 'bar';
  let event2 = {
    id: id2,
    stats: {
      average_price: averagePrice2,
      lowest_price_good_deals: lowestPriceGoodDeals2,
      lowest_price: lowestPrice2,
      highest_price: highestPrice2
    },
    venue: {
      name: venueName2,
      extended_address: venueExtendedAddress2,
      address: venueStreetAddress2,
    },
    title: title2,
    score: score2,
    datetime_local: datetimeLocal2,
    type: type2,
  };
  let events = [event1, event2];

  let expectedVenueDetails1 = new VenueDetails({
    name: venueName1,
    extendedAddress: venueExtendedAddress1,
    streetAddress: venueStreetAddress1,
  });
  let expectedEventDetails1 = new EventDetails({
    id: id1,
    averagePrice: averagePrice1,
    lowestPriceGoodDeals: lowestPriceGoodDeals1,
    lowestPrice: lowestPrice1,
    highestPrice: highestPrice1,
    title: title1,
    score: score1,
    localDatetime: datetimeLocal1,
    venue: expectedVenueDetails1,
    type: type1,
  });

  let expectedVenueDetails2 = new VenueDetails({
    name: venueName2,
    extendedAddress: venueExtendedAddress2,
    streetAddress: venueStreetAddress2,
  });

  let expectedEventDetails2 = new EventDetails({
    id: id2,
    averagePrice: averagePrice2,
    lowestPriceGoodDeals: lowestPriceGoodDeals2,
    lowestPrice: lowestPrice2,
    highestPrice: highestPrice2,
    title: title2,
    score: score2,
    localDatetime: datetimeLocal2,
    venue: expectedVenueDetails2,
    type: type2,
  });

  let expectedTranslatedEvents = {};
  expectedTranslatedEvents[id2] = expectedEventDetails2;
  expectedTranslatedEvents[id1] = expectedEventDetails1;

  it('tests event details creation', function() {
    expect(expectedEventDetails1).to.eql(EventsTranslator.createEventDetails(event1));
  });

  it('tests event translation', function() {
    let translation = EventsTranslator.translate(events);
    expect(translation.get(id1)).to.eql(expectedEventDetails1);
    expect(translation.get(id2)).to.eql(expectedEventDetails2);
  });
});
