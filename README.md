# Free Code Camp: Quality Assurance Project 5 - American British Translator

## American-British English Translator

The aim of this project was to build a small web app with functionality similar to: https://american-british-translator.freecodecamp.rocks/

The project was built using the following technologies:

- **HTML**
- **JavaScript** with **[Node.js](https://nodejs.org/en/) / [NPM](https://www.npmjs.com/)** for package management.
- **[Express](https://expressjs.com/)** web framework to build the web API.
- **[Bootstrap](https://getbootstrap.com/)** for styling with some custom **CSS**.
- **[FontAwesome](https://fontawesome.com/)** for icons.
- **[Mocha](https://mochajs.org/)** test framework with **[Chai](https://www.chaijs.com/)** assertions for testing.
- **[nodemon](https://nodemon.io/)** for automatic restarting of server during development.

### Project Requirements

- **User Story #1:** You can `POST` to `/api/translate` with a body containing `text` with the text to translate and `locale` with either `american-to-british` or `british-to-american`. The returned object should contain the submitted `text` and `translation` with the translated text.
- **User Story #2:** The `/api/translate` route should handle the way time is written in American and British English. For example, ten thirty is written as "10.30" in British English and "10:30" in American English. The `span` element should wrap the entire time string, i.e. `<span class="highlight">10:30</span>`.
- **User Story #3:** The `/api/translate` route should also handle the way titles/honorifics are abbreviated in American and British English. For example, Doctor Wright is abbreviated as "Dr Wright" in British English and "Dr. Wright" in American English.
- **User Story #4:** Wrap any translated spelling or terms with `<span class="highlight">...</span>` tags so they appear in green.
- **User Story #5:** If one or more of the required fields is missing, return `{ error: 'Required field(s) missing' }`.
- **User Story #6:** If `text` is empty, return `{ error: 'No text to translate' }`
- **User Story #7:** If `locale` does not match one of the two specified locales, return `{ error: 'Invalid value for locale field' }`.
- **User Story #8:** If `text` requires no translation, return `"Everything looks good to me!"` for the translation value.
- **User Story #9:** All of the 24 following unit tests are complete and passing for Translator.translate:

  - Translator.translate returns correct plaintext translation of `Mangoes are my favorite fruit.` to British English
  - Translator.translate returns correct plaintext translation of `I ate yogurt for breakfast.` to British English
  - Translator.translate returns correct plaintext translation of `We had a party at my friend's condo.` to British English
  - Translator.translate returns correct plaintext translation of `Can you toss this in the trashcan for me?` to British English
  - Translator.translate returns correct plaintext translation of `The parking lot was full.` to British English
  - Translator.translate returns correct plaintext translation of `Like a high tech Rube Goldberg machine.` to British English
  - Translator.translate returns correct plaintext translation of `To play hooky means to skip class or work.` to British English
  - Translator.translate returns correct plaintext translation of `No Mr. Bond, I expect you to die.` to British English
  - Translator.translate returns correct plaintext translation of `Dr. Grosh will see you now.` to British English
  - Translator.translate returns correct plaintext translation of `Lunch is at 12:15 today.` to British English
  - Translator.translate returns correct plaintext translation of `We watched the footie match for a while.` to American English
  - Translator.translate returns correct plaintext translation of `Paracetamol takes up to an hour to work.` to American English
  - Translator.translate returns correct plaintext translation of `First, caramelise the onions.` to American English
  - Translator.translate returns correct plaintext translation of `I spent the bank holiday at the funfair.` to American English
  - Translator.translate returns correct plaintext translation of `I had a bicky then went to the chippy.` to American English
  - Translator.translate returns correct plaintext translation of `I've just got bits and bobs in my bum bag.` to American English
  - Translator.translate returns correct plaintext translation of `The car boot sale at Boxted Airfield was called off.` to American English
  - Translator.translate returns correct plaintext translation of `Have you met Mrs Kalyani?` to American English
  - Translator.translate returns correct plaintext translation of `Prof Joyner of King's College, London.` to American English
  - Translator.translate returns correct plaintext translation of `Tea time is usually around 4 or 4.30.` to American English
  - Translator.translate returns correctly highlighted translation of `Mangoes are my favorite fruit.`
  - Translator.translate returns correctly highlighted translation of `I ate yogurt for breakfast.`
  - Translator.translate returns correctly highlighted translation of `We watched the footie match for a while.`
  - Translator.translate returns correctly highlighted translation of `Paracetamol takes up to an hour to work.`

- **User Story #10:** All of the 6 following following functional tests for API routes are complete and passing:
  - Translation with text and locale fields: `POST` request to `/api/translate`
  - Translation with text and invalid locale field: `POST` request to `/api/translate`
  - Translation with missing text field: `POST` request to `/api/translate`
  - Translation with missing locale field: `POST` request to `/api/translate`
  - Translation with empty text: `POST` request to `/api/translate`
  - Translation with text that needs no translation: `POST` request to `/api/translate`

### Project Writeup

The fifth Free Code Camp: Quality Assurance Project is an American/British English Translator App and API. Users can:

- Request the translation of a text from American to British English (or vice-versa) by submitting the form on the app homepage, or by sending a POST request to `/api/solve` with a body containing url encoded fields of `text` (the sentence to be translated) and `locale` (the type of translation to perform, `'american-to-british'` or `'british-to-american'`).

Two test suites have been written for the app:

- `tests/1_unit-tests.js` contains unit tests for the `Translator` class.
- `tests/2_functional-tests.js` contains functional tests of the application API route (`/api/translate`) with a variety of valid and invalid inputs.

### Project Files

- `server.js` - the main entry point of the application, an express web server handling the routes defined in the specification.

- `/routes/api.js` - contains the major API route for the express web app.

- `/components` - contains the `Translator` class with methods to aid translating text, as well as several dictionary files containing keys of words in one language and corresponding values of their translation.

- `public/` - contains static files for the web app (stylesheet, logo, favicons etc), served by express using `express.static()`.

  - `index.js` contains functions for handling updates to the UI view of the app, and is loaded by `index.html`.

- `views/` - contains the single html page for the web app, `index.html`, which is served by express on `GET` requests to `/`

- `tests/` - contains the test suite for the application.

### Usage:

Requires Node.js / NPM in order to install required packages. After downloading the repo, install required dependencies with:

`npm install`

A development mode (with auto server restart on file save), can be started with:

`npm run dev`

The application can then be viewed at `http://localhost:3000/` in the browser.

To start the server without auto-restart on file save:

`npm start`

# American British Translator BoilerPlate

The initial boilerplate for this app can be found at https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/

Instructions for building the project can be found at https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator
