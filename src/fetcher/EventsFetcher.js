'use es6';

import {SeatGeekClient, FilterOption, Operator, SortOption, SortDirection, TaxonomyField} from 'seatgeek-client';

import EventsTranslator from '../translators/EventsTranslator';
import TaxonomyEmojiTranslator from '../translators/TaxonomyEmojiTranslator';

export default class EventsFetcher {

  constructor() {
    this.client = new SeatGeekClient('MzUwNDE1NnwxNDgxNjA1ODM2')
  }

  fetchEventsByPopularityOrderedByLowestPriceGoodDeals(search) {
    let query = {
      cityName: search.cityName,
      stateCode: search.stateCode,
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
        field: TaxonomyField.NAME,
      }];
    }

    return this.client.getEvents(query)
                      .then(events => EventsTranslator.translate(events.events));
  }
}
