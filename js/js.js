const bodyElement = document.body;
const toggleButton = document.getElementById('dark-mode-toggle'); // Assuming you have a toggle button with this ID

const enableDarkMode = () => {
  bodyElement.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled'); // Store user preference
};

const disableDarkMode = () => {
  bodyElement.classList.remove('dark-mode');
  localStorage.removeItem('darkMode'); // Remove user preference
};

// Check for existing user preference in localStorage
const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

if (isDarkModeEnabled) {
  enableDarkMode();
}

// Add event listener to toggle button (if it exists)
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isCurrentlyDarkMode = bodyElement.classList.contains('dark-mode');
    if (isCurrentlyDarkMode) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
}
