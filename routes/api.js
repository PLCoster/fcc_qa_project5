'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  const translator = new Translator();

  // POST /api/translate with text and locale => translation
  app.route('/api/translate').post((req, res) => {
    const { text, locale } = req.body;

    if (text === '') {
      return res.json({ error: 'No text to translate' });
    }

    if (!text || !locale) {
      return res.json({ error: 'Required field(s) missing' });
    }

    if (!translator.validLocale(locale)) {
      return res.json({ error: 'Invalid value for locale field' });
    }

    const translations = translator.translate(text, locale);

    return res.json({ ...translations, text });
  });
};
