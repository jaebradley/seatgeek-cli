'use es6';

import Table from 'cli-table2';

export default class EventDetailsTableBuilder {
  static getHeaders() {
    return ['Type', 'Title', 'Lowest Price Good Deals', 'Popularity',
            'Start Time', 'Venue', 'Average Price', 'Lowest Price',
            'Highest Price'];
  }

  static buildTable(details) {
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
