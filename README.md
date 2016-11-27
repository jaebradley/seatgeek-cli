# SeatGeek Command Line Interface
[![Build Status](https://travis-ci.org/jaebradley/seatgeek-cli.svg?branch=add-other-options)](https://travis-ci.org/jaebradley/seatgeek-cli)
[![Coverage Status](https://coveralls.io/repos/github/jaebradley/seatgeek-cli/badge.svg?branch=master)](https://coveralls.io/github/jaebradley/seatgeek-cli?branch=master)

## Background
As a sucker for a ~~good~~ cheap deal, I ♥️ SeatGeek. 

Unfortunately, the [SeatGeek API](http://platform.seatgeek.com/) doesn't currently release deal score data about events. The only information they release is a `lowest_price_good_deals` field on the `event` response object (and this field is not even documented in their official documentation).

What this command line tool does is 
1. Return the top fifty events (filtered on city, state, etc.) ordered by their popularity.
2. Then sorts these events by their `lowest_price_good_deals` field, from lowest to highest.

The idea is that this result set, while not perfect, should return the most popular events with the best deals.

Popularity acts as a proxy for quality and low prices for good deals act as an indicator for low prices for _great_ deals (I know, I know, not always true).

One final note: I make __no__ guarantees about performance and reliability. If you see problems, feel free to create an issue, and I will do my best to address these issues as they come in.

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
