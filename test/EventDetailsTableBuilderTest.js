'use es6'

import {expect} from 'chai';

import EventDetailsTableBuilder from '../src/tables/builders/EventDetailsTableBuilder';
import EventDetails from '../src/data/EventDetails';
import VenueDetails from '../src/data/VenueDetails';
import emoji from 'node-emoji';

describe('Test EventsFetcher', function() {
  let id1 = 1;
  let averagePrice1 = 2;
  let lowestPriceGoodDeals1 = 3;
  let lowestPrice1 = 4;
  let highestPrice1 = 5;
  let title1 = 'jae';
  let score1 = 6;
  let localDatetime1 = '2016-12-17T20:00:00';
  let type1 = 'baebae';
  let venueName1 = 'jadley';
  let extendedAddress1 = '1234';
  let streetAddress1 = '5678';
  let venue1 = new VenueDetails({
    name: venueName1,
    extendedAddress: extendedAddress1,
    streetAddress: streetAddress1
  });
  let eventDetails1 = new EventDetails({
    id: id1,
    averagePrice: averagePrice1,
    lowestPriceGoodDeals: lowestPriceGoodDeals1,
    lowestPrice: lowestPrice1,
    highestPrice: highestPrice1,
    title: title1,
    score: score1,
    localDatetime: localDatetime1,
    type: type1,
    venue: venue1,
  });
  it('tests row building', function() {
    let row = EventDetailsTableBuilder.buildRow(eventDetails1);
    let expectedRow = [
      emoji.get('confused'),
      title1,
      `$${lowestPriceGoodDeals1}`,
      '600.0',
      '12/17/16 8:00 PM',
      'jadley\n5678\n1234',
      `$${averagePrice1}`,
      `$${lowestPrice1}`,
      `$${highestPrice1}`,
    ];
    expect(row).to.eql(expectedRow);
  });

  it('tests table building', function() {
    let table = EventDetailsTableBuilder.buildTableFromEventDetails([eventDetails1]);
    console.log(table.toString());
  });
});
