function count() {
  const countEl = document.getElementById('count');
  countEl.innerText = parseInt(countEl.innerText) + 1;
}
function reset() {
  const countElement = document.getElementById('count');
  countElement.innerText = 0;
}
