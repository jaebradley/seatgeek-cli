'use es6';

import Table from 'cli-table2';

import EventsFetcher from '../../fetcher/EventsFetcher';

export default class EventDetailsTableBuilder {
  static getHeaders() {
    return ['Type', 'Title', 'Good Deal Min. Price', 'Pop.',
            'Start', 'Venue', 'Avg. Price', 'Min. Price',
            'Max. Price'];
  }

  static buildTable(search) {
    return EventsFetcher.fetchEventsByPopularityOrderedByLowestPriceGoodDeals(search)
                        .then(details => console.log(EventDetailsTableBuilder.buildTableFromEventDetails(details).toString()));
  }

  static buildTableFromEventDetails(details) {
    let table = new Table({
      head: EventDetailsTableBuilder.getHeaders(),
      wordWrap: true,
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
      `$${detail.lowestPriceGoodDeals.toLocaleString()}`,
      (detail.score * 100).toFixed(1),
      detail.localDatetime,
      `${detail.venue.name} ${detail.venue.streetAddress} ${detail.venue.extendedAddress}`,
      `$${detail.averagePrice.toLocaleString()}`,
      `$${detail.lowestPrice.toLocaleString()}`,
      `$${detail.highestPrice.toLocaleString()}`,
    ];
  }
};
