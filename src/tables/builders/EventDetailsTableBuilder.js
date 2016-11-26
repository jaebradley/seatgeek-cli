'use es6';

import Table from 'cli-table2';

import EventsFetcher from '../../fetcher/EventsFetcher';

export default class EventDetailsTableBuilder {
  static getHeaders() {
    return ['Type', 'Title', 'Good Deal Min. Price', 'Popularity',
            'Start', 'Venue', 'Avg. Price', 'Min. Price',
            'Max. Price'];
  }

  static buildTable(search) {
    let details = EventsFetcher.fetchEventsByPopularityOrderedByLowestPriceGoodDeals(search);
    console.log(EventDetailsTableBuilder.buildTableFromEventDetails(details));
  }

  static buildTableFromEventDetails(details) {
    let table = new Table({
      head: EventDetailsTableBuilder.getHeaders(),
    });

    details.forEach(function(detail) {
      table.push(EventDetailsTableBuilder.buildRow(detail));
    });

    return table;
  }

  static buildRow(detail) {
    return [
      detail.type,
      detail.title,
      detail.lowestPriceGoodDeals,
      detail.score,
      detail.localDatetime,
      `${detail.venue.name} ${detail.venue.streetAddress} ${detail.venue.extendedAddress}`,
      detail.averagePrice,
      detail.lowestPrice,
      detail.highestPrice,
    ];
  }
};