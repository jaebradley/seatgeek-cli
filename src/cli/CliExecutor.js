'use es6';

import program from 'commander';
import moment from 'moment';
import emoji from 'node-emoji';

import EventsSearch from '../data/EventsSearch';
import Constants from '../data/Constants';
import EventDetailsTableBuilder from '../tables/builders/EventDetailsTableBuilder';

export default class CliExecutor {
  static execute() {
    try {
      program.version('0.0.1');

      program.option('-c', '--city [city]')
      .option('-s', '--state [state]')
      .option('-d', '--datetime [datetime]')
      .option('-t', '--type [type]')
      .action(function() {
        EventDetailsTableBuilder.buildTable(CliExecutor.parseRawArgs(program.rawArgs));
      });

      program.parse(process.argv);
    } catch (e) {
      let disappointedEmoji = emoji.get('disappointed');
      let angryEmoji = emoji.get('angry');
      let rageEmoji = emoji.get('rage');
      console.log(`${disappointedEmoji} ${angryEmoji} ${rageEmoji} Whoops! Unknown error. Please get mad at me here: https://github.com/jaebradley/seatgeek-cli/issues ${rageEmoji} ${angryEmoji} ${disappointedEmoji}`);
    }

  }

  static parseRawArgs(args) {
    let cityName = undefined;
    let stateCode = undefined;
    let datetime = Constants.getDatetime();
    let type = undefined;
    for (let i = 0; i < args.length - 1; i++) {
      let arg = args[i];
      let nextArg = args[i + 1];
      if ((arg == '-c') || (arg == '--city')) {
        cityName = nextArg;
      } else if ((arg == '-s') || (arg == '--state')) {
        stateCode = nextArg;
      } else if ((arg == '-d') || (arg == '--datetime')) {
        datetime = nextArg;
      } else if ((arg == '-t') || (arg == '--type')) {
        type = nextArg;
      }
    }

    return new EventsSearch({
      cityName: cityName,
      stateCode: stateCode,
      datetime: datetime,
      type: type,
    });
  }
}
