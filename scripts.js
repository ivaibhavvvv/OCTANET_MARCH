document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // You can add code here to send the form data to a backend server or perform other actions
    document.getElementById('status').innerHTML = 'Message sent successfully!';
  });
  