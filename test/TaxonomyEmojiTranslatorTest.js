'use es6';

import {expect} from 'chai';
import emoji from 'node-emoji';
import {Taxonomy} from 'seatgeek-client';

import TaxonomyEmojiTranslator from '../src/translators/TaxonomyEmojiTranslator';

describe('Test Taxonomy Emoji Translator', function() {
  it('tests get taxonomy from slug', function() {
    let taxonomy = TaxonomyEmojiTranslator.getTaxonomy('indycar');
    expect(taxonomy).to.eql(Taxonomy.INDYCAR);
  });
  
  it('tests taxonomy emoji translation', function() {
    let translatedEmoji = TaxonomyEmojiTranslator.translate('indycar');
    expect(translatedEmoji).to.eql(emoji.get('checkered_flag'));
  });
});
