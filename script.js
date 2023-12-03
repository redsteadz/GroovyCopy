function validateAndRedirect(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Validation logic
  var form = document.getElementById('myForm');
  var inputs = form.getElementsByTagName('input');
  var textarea = document.getElementById('feedback');
  var checkbox = document.getElementById('checkbox');

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== 'checkbox' && inputs[i].value.trim() !== '') {
      // Submit the form if at least one field is filled
      redirectToPage('/redirect-page.html');
      return false;
    }
  }

  if (textarea.value.trim() !== '') {
    // Submit the form if the text area is filled
    redirectToPage('/redirect-page.html');
    return false;
  }

  if (checkbox.checked) {
    // Submit the form if the checkbox is checked
    redirectToPage('/redirect-page.html');
    return false;
  }

  // Display an alert if no field is filled
  alert('Please fill in at least one field.');
  return false;
}

// Redirect function
function redirectToPage(url) {
  window.location.href = url; // Replace with your actual redirect URL
}

