'use es6';

import emoji from 'node-emoji';
import {Map} from 'immutable';
import {Taxonomy} from 'seatgeek-client';

export default class TaxonomyEmojiTranslator {
  static translate(slug) {
    let translatedTaxonomy = TaxonomyEmojiTranslator.getTaxonomy(slug);
    let taxonomyMap = TaxonomyEmojiTranslator.getTaxonomyEmojiMap();
    return TaxonomyEmojiTranslator.getEmoji(translatedTaxonomy, taxonomyMap);
  }

  static getTaxonomy(slug) {
    for (let i = 0; i < Taxonomy.enumValues.length; i++) {
      let taxonomy = Taxonomy.enumValues[i];
      if (taxonomy.slug === slug) {
        return taxonomy;
      }
    }

    throw new ReferenceError('unknown slug');
  }

  static getEmoji(taxonomy, taxonomyMap) {
    if (taxonomyMap.has(taxonomy)) {
      return taxonomyMap.get(taxonomy);
    }

    if ((typeof taxonomy == 'undefined') || (taxonomy.parent_id == null)) {
      return emoji.get('confused');
    }

    for (let i = 0; i < Taxonomy.enumValues.length; i++) {
      let taxonomyValue = Taxonomy.enumValues[i];
      if (taxonomy.parent_id == taxonomyValue.id) {
        return TaxonomyEmojiTranslator.getEmoji(taxonomyValue, taxonomyMap);
      }
    }
  }

  static getTaxonomyEmojiMap() {
    let map = Map();
    map = map.set(Taxonomy.BASEBALL, emoji.get('baseball'));
    map = map.set(Taxonomy.BASKETBALL, emoji.get('basketball'));
    map = map.set(Taxonomy.FOOTBALL, emoji.get('football'));
    map = map.set(Taxonomy.HOCKEY, emoji.get('snowflake'));
    map = map.set(Taxonomy.SOCCER, emoji.get('soccer'));
    map = map.set(Taxonomy.AUTO_RACING, emoji.get('checkered_flag'));
    map = map.set(Taxonomy.GOLF, emoji.get('golf'));
    map = map.set(Taxonomy.FIGHTING, emoji.get('punch'));
    map = map.set(Taxonomy.TENNIS, emoji.get('tennis'));
    map = map.set(Taxonomy.ANIMAL_SPORTS, emoji.get('horse_racing'));
    map = map.set(Taxonomy.EXTREME_SPORTS, emoji.get('snowboarder'));
    map = map.set(Taxonomy.OLYMPIC_SPORTS, emoji.get('globe_with_meridians'));
    map = map.set(Taxonomy.CONCERTS, emoji.get('musical_score'));
    map = map.set(Taxonomy.THEATER, emoji.get('performing_arts'));
    map = map.set(Taxonomy.COMEDY, emoji.get('laughing'));
    map = map.set(Taxonomy.FILM, emoji.get('movie_camera'));
    map = map.set(Taxonomy.LITERARY, emoji.get('book'));
    map = map.set(Taxonomy.CIRCUS, emoji.get('circus_tent'));

    return map;
  }
}
