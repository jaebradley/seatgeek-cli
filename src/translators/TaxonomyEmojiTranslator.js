'use es6';

import emoji from 'node-emoji';
import {Map} from 'immutable';

import {Taxonomy} from 'seatgeek-client';

export default class TaxonomyEmojiTranslator {
  static translate(slug) {
    let taxonomyMap = TaxonomyEmojiTranslator.getTaxonomyEmojiMap();
    let taxonomy = TaxonomyEmojiTranslator.getTaxonomy(slug);
    return TaxonomyEmojiTranslator.getEmoji(taxonomy, taxonomyMap);
  }

  static getTaxonomy(slug) {
    Taxonomy.enumValues.forEach(function(taxonomy) {
      if (taxonomy.slug == slug) {
        return taxonomy;
      }
    });

    throw new ReferenceError('unknown taxonomy slug');
  }

  static getEmoji(taxonomy, taxonomyMap) {
    if (taxonomyMap.has(taxonomy)) {
      return taxonomyMap.get(taxonomy);
    }

    if (taxonomy.parent_id == null) {
      return taxonomy;
    }

    Taxonomy.enumValues.forEach(function(taxonomyValue) {
      TaxonomyEmojiTranslator.getEmoji(taxonomyValue, taxonomyMap);
    });
  }

  static getTaxonomyEmojiMap() {
    return Map({
      Taxonomy.BASEBALL: emoji.get('baseball'),
      Taxonomy.BASKETBALL: emoji.get('basketball'),
      Taxonomy.FOOTBALL: emoji.get('football'),
      Taxonomy.HOCKEY: emoji.get('snowflake'),
      Taxonomy.SOCCER: emoji.get('soccer'),
      Taxonomy.AUTO_RACING: emoji.get('checkered_flag'),
      Taxonomy.GOLF: emoji.get('golf'),
      Taxonomy.FIGHTING: emoji.get('punch'),
      Taxonomy.TENNIS: emoji.get('tennis'),
      Taxonomy.ANIMAL_SPORTS: emoji.get('horse_racing'),
      Taxonomy.EXTREME_SPORTS: emoji.get('snowboarder'),
      Taxonomy.OLYMPIC_SPORTS: emoji.get('globe_with_meridians'),
      Taxonomy.CONCERTS: emoji.get('musical_score'),
      Taxonomy.THEATER: emoji.get('performing_arts'),
      Taxonomy.COMEDY: emoji.get('laughing'),
      Taxonomy.FILM: emoji.get('movie_camera'),
      Taxonomy.LITERARY: emoji.get('book'),
      Taxonomy.CIRCUS: emoji.get('circus_tent'),
    });
  }
}
