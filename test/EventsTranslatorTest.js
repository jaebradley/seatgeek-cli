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

  it('tests event details creation', function() {
    let expectedVenueDetails = new VenueDetails({
      name: venueName1,
      extendedAddress: venueExtendedAddress1,
      streetAddress: venueStreetAddress1,
    });
    let expectedEventDetails = new EventDetails({
      id: id1,
      averagePrice: averagePrice1,
      lowestPriceGoodDeals: lowestPriceGoodDeals1,
      lowestPrice: lowestPrice1,
      highestPrice: highestPrice1,
      title: title1,
      score: score1,
      localDatetime: datetimeLocal1,
      venue: expectedVenueDetails,
      type: type1,
    });
    expect(EventsTranslator.createEventDetails(event1)).to.eql(expectedEventDetails.toJS());
  });
});
