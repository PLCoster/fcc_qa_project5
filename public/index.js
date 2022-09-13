// Helper function to make any displayed results HTML-safe
// Leaves in allowed 'highlight' spans for translation
function replaceUnsafeCharsInTranslations(input) {
  if (typeof input !== 'string') {
    return input;
  }

  const charReplacements = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;',
  };

  const allowedHTMLSections = ['<span class="highlight">', '</span>'];

  const sections = input.split(/(<span class="highlight">|<\/span>)/g);

  return sections
    .map((strSection) => {
      if (allowedHTMLSections.includes(strSection)) {
        return strSection;
      } else {
        return strSection
          .split('')
          .map((char) => {
            if (char in charReplacements) {
              return charReplacements[char];
            }
            return char;
          })
          .join('');
      }
    })
    .join('');
}

const translateHandler = async () => {
  const textArea = document.getElementById('text-input');
  const localeArea = document.getElementById('locale-select');

  const resultArea = document.getElementById('translation-result');
  const translatedArea = document.getElementById('translated-sentence');
  const originalArea = document.getElementById('original-sentence');

  const errorArea = document.getElementById('error-display');
  const errorMsgArea = document.getElementById('error-msg');

  const body = { text: textArea.value, locale: localeArea.value };

  // Hide error message area
  errorArea.style.display = 'none';

  const data = await fetch('/api/translate', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const parsed = await data.json();
  if (parsed.error) {
    errorMsgArea.innerText = JSON.stringify(parsed, null, 2);
    resultArea.style.display = 'none';
    errorArea.style.display = 'block';
    return;
  }

  translatedArea.innerHTML = replaceUnsafeCharsInTranslations(
    parsed.translation,
  );
  originalArea.innerHTML = replaceUnsafeCharsInTranslations(parsed.text);
  resultArea.style.display = 'block';

  return;
};

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('translate-btn')
    .addEventListener('click', translateHandler);
});
