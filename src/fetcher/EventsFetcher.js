'use es6';

import {SeatGeekClient, FilterOption, Operator, SortOption, SortDirection, TaxonomyField} from 'seatgeek-client';

import EventsTranslator from '../translators/EventsTranslator';
import TaxonomyEmojiTranslator from '../translators/TaxonomyEmojiTranslator';

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
      perPage: 50,
      page: 1,
    };

    if (typeof search.type !== 'undefined') {
      query['taxonomies'] = [{
        taxonomy: TaxonomyEmojiTranslator.getTaxonomy(search.type),
        field: TaxonomyField.ID,
      }];
    }

    return SeatGeekClient.getEvents(query)
                         .then(events => EventsTranslator.translate(events.events));
  }
}
