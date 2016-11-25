'use es6';

import {Record} from 'immutable';

let defaults = {
  name: '',
  extendedAddress: '',
  streetAddress: '',
}

export default class VenueDetails extends Record(defaults) {
}
