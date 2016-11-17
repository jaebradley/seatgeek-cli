'use es6';

import SeatGeekClient from 'seatgeek-client';

export default class EventsFetcher {
  constructor() {}
  static fetchEvents(city, state) {
    return SeatGeekClient.getEvents({cityName: city, stateCode: state});
  }
}
