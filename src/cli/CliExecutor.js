'use es6';

import program from 'commander';

import EventsSearch from '../data/EventsSearch';
import EventDetailsTableBuilder from '../tables/builders/EventDetailsTableBuilder';

export default class CliExecutor {
  static execute() {
    program.version('0.0.1');

    program.command('events [city] [state]')
           .action((city, state) => CliExecutor.action(city, state));

    program.parse(process.argv);

  }

  static action(city, state) {
    let search = new EventsSearch({
      cityName: city,
      stateCode: state,
    });

    EventDetailsTableBuilder.buildTable(search);
  }
}
