'use es6';

import Table from 'cli-table2';
import moment from 'moment';

import EventsFetcher from '../../fetcher/EventsFetcher';

export default class EventDetailsTableBuilder {
  static getHeaders() {
    return ['Type', 'Title', 'Good Deal\nMin. Price', 'Pop.',
            'Start', 'Venue', 'Avg.', 'Min.', 'Max.'];
  }

  static buildTable(search) {
    return EventsFetcher.fetchEventsByPopularityOrderedByLowestPriceGoodDeals(search)
                        .then(details => console.log(EventDetailsTableBuilder.buildTableFromEventDetails(details).toString()));
  }

  static buildTableFromEventDetails(details) {
    let table = new Table({
      head: EventDetailsTableBuilder.getHeaders(),
      wordWrap: true,
      colWidths: [null, 20],
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
      moment(detail.localDatetime, 'YYYY-MM-DDTHH:mm:ss').format('M/D/YY h:mm A'),
      `${detail.venue.name}\n${detail.venue.streetAddress}\n${detail.venue.extendedAddress}`,
      `$${detail.averagePrice.toLocaleString()}`,
      `$${detail.lowestPrice.toLocaleString()}`,
      `$${detail.highestPrice.toLocaleString()}`,
    ];
  }
};
