// Toggle dropdown menu
const dropdownButton = document.getElementById('language-dropdown-button');
const dropdownMenu = document.getElementById('language-dropdown-menu');

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});