# SeatGeek Command Line Interface
[![Build Status](https://travis-ci.org/jaebradley/seatgeek-cli.svg?branch=add-other-options)](https://travis-ci.org/jaebradley/seatgeek-cli)

## Install
* `npm install seatgeek-cli`
* [**NPMJS**](https://www.npmjs.com/package/seatgeek-cli)

## Command Line Usage
* `sg` (**Required Command line Argument**)
* `City` (**_Optional_**)
  * **Arg**: `-c` or `--city`
  * Takes a string representing a city name to filter on
* `State` (**_Optional_**)
  * **Arg**: `-s` or `--state`
  * Takes a string representing the [ISO-3166-2 state code](https://en.wikipedia.org/wiki/ISO_3166-2:US) to filter on.
  * The [SeatGeek Platform API](http://platform.seatgeek.com/) specifies a two letter abbreviation.
* `Type` (**_Optional_**)
  * **Arg**: `-t` or `--type`
  *  Use any of [these `Taxonomy` slugs](https://github.com/jaebradley/seatgeek-client/blob/master/src/data/Taxonomy.js) to filter on a specific type of event to view.
* `Datetime` (**_Optional_**)
  * **Arg**: `-d` or `--datetime`
  * Defaults to filter on events starting in the next 3 months.
  * Takes a string representing a __UTC__ datetime in the [ISO-8601 datetime format](https://en.wikipedia.org/wiki/ISO_8601) (`YYYY-MM-DDTHH:MM:SS`).

## Example
![alt-text](http://i.imgur.com/YTpXOv6.png)
