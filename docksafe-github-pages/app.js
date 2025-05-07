
document.getElementById('logForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const output = document.getElementById('logOutput');
  output.textContent = 'New trailer log recorded!';
});
