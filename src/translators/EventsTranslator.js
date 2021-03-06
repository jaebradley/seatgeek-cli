'use es6';

import {Map, List} from 'immutable';

import EventDetails from '../data/EventDetails';
import VenueDetails from '../data/VenueDetails'

export default class EventsTranslator {
  static translate(events) {
    let translation = Map();
    events.forEach(function(event) {
      if (event.stats.lowest_price_good_deals !== null) {
        let eventDetails = EventsTranslator.createEventDetails(event);
        translation = translation.set(event.id, eventDetails);
      }
    });

    translation = translation.sortBy(function(value, key) {
      return value.lowestPriceGoodDeals;
    });

    return translation;
  }

  static createEventDetails(event) {
    let venueDetails = new VenueDetails({
      name: event.venue.name,
      extendedAddress: event.venue.extended_address,
      streetAddress: event.venue.address,
    });

    let eventDetails = new EventDetails({
      id: event.id,
      averagePrice: event.stats.average_price,
      lowestPriceGoodDeals: event.stats.lowest_price_good_deals,
      lowestPrice: event.stats.lowest_price,
      highestPrice: event.stats.highest_price,
      title: event.title,
      score: event.score,
      localDatetime: event.datetime_local,
      venue: venueDetails,
      type: event.type,
    });

    return eventDetails;
  }
}
