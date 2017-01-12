'use es6';

import {Map} from 'immutable';

import program from 'commander';
import moment from 'moment';
import emoji from 'node-emoji';

import EventsSearch from '../data/EventsSearch';
import Constants from '../data/Constants';
import EventDetailsTableBuilder from '../tables/builders/EventDetailsTableBuilder';

export default class CliExecutor {
  constructor() {
    this.builder = new EventDetailsTableBuilder();
  }

  execute() {
    program.version('0.0.1')
      .option('-c --city <city>')
      .option('-s --state <state>')
      .option('-d --datetime <datetime>')
      .option('-t --type <type>')
      .parse(process.argv);

      let variables = Map({datetime: Constants.getDatetime()});
      if (typeof program.city !== 'undefined') {
        variables = variables.set('cityName', program.city);
      }

      if (typeof program.state !== 'undefined') {
        variables = variables.set('stateCode', program.state);
      }

      if (typeof program.type !== 'undefined') {
        variables = variables.set('type', program.type);
      }

      this.builder.buildTable(variables);

    } catch (e) {
      let disappointedEmoji = emoji.get('disappointed');
      let angryEmoji = emoji.get('angry');
      let rageEmoji = emoji.get('rage');
      console.log(`${disappointedEmoji} ${angryEmoji} ${rageEmoji} Whoops! Unknown error. Please get mad at me here: https://github.com/jaebradley/seatgeek-cli/issues ${rageEmoji} ${angryEmoji} ${disappointedEmoji}`);
    }
}
