'use es6';

import {Map} from 'immutable';

import {expect} from 'chai';

import CliExecutor from '../src/cli/CliExecutor';

describe('Tests Cli Executor', function() {
  let cityName = 'bae';
  let stateCode = 'jadley';
  let datetime = 'boo';
  let type = 'jae';

  let shortArgs = ['-c', cityName,
                   '-s', stateCode,
                   '-d', datetime,
                   '-t', type];

  let longArgs = ['--city', cityName,
                  '--state', stateCode,
                  '--datetime', datetime,
                  '--type', type];

  let expectedResult = Map({
    cityName: cityName,
    stateCode: stateCode,
    datetime: datetime,
    type: type,
  });

  it('tests parsing raw args', function() {
    let emptyArgsResult = CliExecutor.parseRawArgs([]);
    expect(emptyArgsResult.cityName).to.equal(undefined);
    expect(emptyArgsResult.stateCode).to.equal(undefined);
    expect(emptyArgsResult.type).to.equal(undefined);

    let shortArgsResult = CliExecutor.parseRawArgs(shortArgs);
    expect(shortArgsResult.toJS()).to.eql(expectedResult.toJS());

    let longArgsResult = CliExecutor.parseRawArgs(longArgs);
    expect(longArgsResult.toJS()).to.eql(expectedResult.toJS());
  });
});
