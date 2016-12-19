'use es6';

import {List, Map} from 'immutable';

import {SeatGeekClient, FilterOption, Operator, SortOption, SortDirection, TaxonomyField} from 'seatgeek-client';

import EventsTranslator from '../translators/EventsTranslator';
import TaxonomyEmojiTranslator from '../translators/TaxonomyEmojiTranslator';

export default class EventsFetcher {

  constructor() {
    this.client = new SeatGeekClient('MzUwNDE1NnwxNDgxNjA1ODM2')
  }

  fetchEventsByPopularityOrderedByLowestPriceGoodDeals(search) {
    let query = Map({
      sort: {
        option: SortOption.SCORE,
        direction: SortDirection.DESCENDING,
      },
      perPage: 50,
      page: 1
    });

    if (typeof search.get('cityName') !== 'undefined') {
      query = query.set('cityName', search.get('cityName'));
    }

    if (typeof search.get('stateCode') !== 'undefined') {
      query = query.set('stateCode', search.get('stateCode'));
    }

    if (typeof search.get('datetime') !== 'undefined') {
      let filterOption = Map({
        option: FilterOption.DATETIME_UTC,
        operator: Operator.LESS_THAN,
        value: search.get('datetime')
      });
      query = query.set('filters', List.of(filterOption));
    }

    if (typeof search.get('type') !== 'undefined') {
      let taxonomies = Map({
        taxonomy: TaxonomyEmojiTranslator.getTaxonomy(search.get('type')),
        field: TaxonomyField.NAME
      });
      query = query.set('taxonomies', List.of(taxonomies));
    }

    return this.client.getEvents(query.toJS())
                      .then(events => EventsTranslator.translate(events.events));
  }
}
