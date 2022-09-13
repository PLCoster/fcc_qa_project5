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

  translatedArea.innerHTML = parsed.translation;
  originalArea.innerHTML = parsed.text;
  resultArea.style.display = 'block';

  return;
};

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('translate-btn')
    .addEventListener('click', translateHandler);
});
