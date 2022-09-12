const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  suite('American to British English Plaintext Translations', () => {
    test('Successfully translates "Mangoes are my favorite fruit."', () => {
      const sentence = 'Mangoes are my favorite fruit.';
      const locale = 'american-to-british';
      const expectedPlaintext = 'Mangoes are my favourite.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'American English should be translated to British English correctly',
      );
    });

    test('Successfully translates "I ate yogurt for breakfast."', () => {
      const sentence = 'I ate yogurt for breakfast.';
      const locale = 'american-to-british';
      const expectedPlaintext = 'I ate yoghurt for breakfast.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'American English should be translated to British English correctly',
      );
    });

    test('Successfully translates "We had a party at my friend\'s condo."', () => {
      const sentence = "We had a party at my friend's condo.";
      const locale = 'american-to-british';
      const expectedPlaintext = "We had a party at my friend's flat.";

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'American English should be translated to British English correctly',
      );
    });

    test('Successfully translates "Can you toss this in the trashcan for me?"', () => {
      const sentence = 'Can you toss this in the trashcan for me?';
      const locale = 'american-to-british';
      const expectedPlaintext = 'Can you toss this in the bin for me?';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'American English should be translated to British English correctly',
      );
    });

    test('Successfully translates "The parking lot was full."', () => {
      const sentence = 'The parking lot was full.';
      const locale = 'american-to-british';
      const expectedPlaintext = 'The car park was full.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'American English should be translated to British English correctly',
      );
    });

    test('Successfully translates "Like a high tech Rube Goldberg machine."', () => {
      const sentence = 'Like a high tech Rube Goldberg machine.';
      const locale = 'american-to-british';
      const expectedPlaintext = 'Like a high tech Heath Robinson device.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'American English should be translated to British English correctly',
      );
    });

    test('Successfully translates "To play hooky means to skip class or work."', () => {
      const sentence = 'To play hooky means to skip class or work.';
      const locale = 'american-to-british';
      const expectedPlaintext = 'To bunk off means to skip class or work.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'American English should be translated to British English correctly',
      );
    });

    test('Successfully translates "No Mr. Bond, I expect you to die."', () => {
      const sentence = 'No Mr. Bond, I expect you to die.';
      const locale = 'american-to-british';
      const expectedPlaintext = 'No Mr Bond, I expect you to die.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'American English should be translated to British English correctly',
      );
    });

    test('Successfully translates "Dr. Grosh will see you now."', () => {
      const sentence = 'Dr. Grosh will see you now.';
      const locale = 'american-to-british';
      const expectedPlaintext = 'Dr Grosh will see you now.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'American English should be translated to British English correctly',
      );
    });

    test('Successfully translates "Lunch is at 12:15 today."', () => {
      const sentence = 'Lunch is at 12:15 today.';
      const locale = 'american-to-british';
      const expectedPlaintext = 'Lunch is at 12.15 today.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'American English should be translated to British English correctly',
      );
    });
  });

  suite('British to American English Plaintext Translations', () => {
    test('Successfully translates "We watched the footie match for a while."', () => {
      const sentence = 'We watched the footie match for a while.';
      const locale = 'british-to-american';
      const expectedPlaintext = 'We watched the soccer match for a while.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'British English should be translated to American English correctly',
      );
    });

    test('Successfully translates "Paracetamol takes up to an hour to work."', () => {
      const sentence = 'Paracetamol takes up to an hour to work.';
      const locale = 'british-to-american';
      const expectedPlaintext = 'Tylenol takes up to an hour to work.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'British English should be translated to American English correctly',
      );
    });

    test('Successfully translates "First, caramelise the onions."', () => {
      const sentence = 'First, caramelise the onions.';
      const locale = 'british-to-american';
      const expectedPlaintext = 'Tylenol takes up to an hour to work.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'British English should be translated to American English correctly',
      );
    });

    test('Successfully translates "I spent the bank holiday at the funfair."', () => {
      const sentence = 'I spent the bank holiday at the funfair.';
      const locale = 'british-to-american';
      const expectedPlaintext = 'I spent the public holiday at the carnival.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'British English should be translated to American English correctly',
      );
    });

    test('Successfully translates "I had a bicky then went to the chippy."', () => {
      const sentence = 'I had a bicky then went to the chippy.';
      const locale = 'british-to-american';
      const expectedPlaintext =
        'I had a cookie then went to the fish-and-chip shop.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'British English should be translated to American English correctly',
      );
    });

    test('Successfully translates "I\'ve just got bits and bobs in my bum bag."', () => {
      const sentence = "I've just got bits and bobs in my bum bag.";
      const locale = 'british-to-american';
      const expectedPlaintext = "I've just got odds and ends in my fanny pack.";

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'British English should be translated to American English correctly',
      );
    });

    test('Successfully translates "The car boot sale at Boxted Airfield was called off."', () => {
      const sentence = 'The car boot sale at Boxted Airfield was called off.';
      const locale = 'british-to-american';
      const expectedPlaintext =
        'The swap meet at Boxted Airfield was called off.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'British English should be translated to American English correctly',
      );
    });

    test('Successfully translates "Have you met Mrs Kalyani?"', () => {
      const sentence = 'Have you met Mrs Kalyani?';
      const locale = 'british-to-american';
      const expectedPlaintext = 'Have you met Mrs. Kalyani?';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'British English should be translated to American English correctly',
      );
    });

    test('Successfully translates "Prof Joyner of King\'s College, London."', () => {
      const sentence = "Prof Joyner of King's College, London.";
      const locale = 'british-to-american';
      const expectedPlaintext = "Prof. Joyner of King's College, London.";

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'British English should be translated to American English correctly',
      );
    });

    test('Successfully translates "Tea time is usually around 4 or 4.30."', () => {
      const sentence = 'Tea time is usually around 4 or 4.30.';
      const locale = 'british-to-american';
      const expectedPlaintext = 'Tea time is usually around 4 or 4:30.';

      const { translation, plaintext } = translator.translate('');
      assert.equal(
        plaintext,
        expectedPlaintext,
        'British English should be translated to American English correctly',
      );
    });
  });
});
