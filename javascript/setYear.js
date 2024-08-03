document.addEventListener('DOMContentLoaded', (event) => {
    const yearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  });