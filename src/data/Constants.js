'use es6';

import moment from 'moment';

export default class Constants {
  static getDatetime() {
    return moment.utc()
                 .add(3, 'months')
                 .format(Constants.getDatetimeFormat());
  }

  static getDatetimeFormat() {
    return 'YYYY-MM-DDTHH:mm:ss';
  }
}
