document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the stored total or initialize it to 0 if not found, using sessionStorage
    let total = parseInt(sessionStorage.getItem('totalValue') || '0', 10);
    const totalDisplay = document.getElementById('totalDisplay');
    totalDisplay.textContent = `Total: Php ${total}`;

    // Update the display and sessionStorage when checkboxes change
    document.querySelectorAll('input[type="checkbox"][name="main"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Adjust total based on whether the checkbox is checked or not
            if (this.checked) {
                total += parseInt(this.value, 10);
            } else {
                total -= parseInt(this.value, 10);
            }
            // Update the total display and save the new total in sessionStorage
            totalDisplay.textContent = `Total: Php ${total}`;
            sessionStorage.setItem('totalValue', total.toString());
        });
    });
});
// Function to save checkbox states to Local Storage
function saveCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      localStorage.setItem(checkbox.id, checkbox.checked);
    });
  }
  
  // Function to load checkbox states from Local Storage
  function loadCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      const savedState = localStorage.getItem(checkbox.id);
      if (savedState !== null) {
        checkbox.checked = savedState === 'true';
      }
    });
  }
  
  // Attach event listener to the checkboxes to save their states
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', saveCheckboxStates);
  });
  
  // Load checkbox states on page load
  document.addEventListener('DOMContentLoaded', loadCheckboxStates);