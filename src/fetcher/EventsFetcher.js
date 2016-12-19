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

    if (typeof search.cityName !== 'undefined') {
      query.set('cityName', search.cityName);
    }

    if (typeof search.stateCode !== 'undefined') {
      query.set('stateCode', search.stateCode);
    }

    if (typeof search.datetime !== 'undefined') {
      let filterOption = Map({
        option: FilterOption.DATETIME_UTC,
        operator: Operator.LESS_THAN,
        value: search.datetime
      });
      query.set('filters', List.of(filterOption));
    }

    if (typeof search.type !== 'undefined') {
      let taxonomies = Map({
        taxonomy: TaxonomyEmojiTranslator.getTaxonomy(search.type),
        field: TaxonomyField.NAME
      });
      query.set('taxonomies', List.of(taxonomies));
    }

    console.log(query);
    return this.client.getEvents(query.toJS())
                      .then(events => EventsTranslator.translate(events.events));
  }
}
