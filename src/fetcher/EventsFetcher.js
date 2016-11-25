'use es6';

import {SeatGeekClient, FilterOption, Operator, SortOption, SortDirection} from 'seatgeek-client';

import EventsTranslator from '../translators/EventsTranslator';

export default class EventsFetcher {

  static fetchEventsByPopularityOrderedByLowestPriceGoodDeals(search) {
    let query = {
      venues: {
        properties: {
          cityName: search.cityName,
          stateCode: search.stateCode,
          countryCode: search.countryCode,
        },
      },
      filters: [
        {
          option: FilterOption.DATETIME_UTC,
          operator: Operator.LESS_THAN,
          value: search.datetime,
        },
      ],
      sort: {
        option: SortOption.SCORE,
        direction: SortDirection.DESCENDING,
      },
      pagination: {
        perPage: 100,
        page: 1
      },
    };
    return SeatGeekClient.getEvents(query)
                         .then(events => EventsTranslator.translate(events));
  }
}
