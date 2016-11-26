'use es6';

import program from 'commander';

import EventsSearch from './data/EventsSearch';
import EventDetailsTableBuilder from './tables/builders/EventDetailsTableBuilder';

program
  .version('0.0.1')
  .description('An application for SeatGeek Events')
  .option('-ci', '--city', 'City')
  .option('-s', '--state', 'State')
  .parse(process.argv);

let search = new EventsSearch({
  cityName: program.city,
  stateCode: program.state,
});

EventDetailsTableBuilder.buildTable(search);
