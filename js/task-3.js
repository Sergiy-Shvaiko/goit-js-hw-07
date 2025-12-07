const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', () => {
  const trimName = inputName.value.trim();
  if (trimName === '') {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = trimName;
  }
});
