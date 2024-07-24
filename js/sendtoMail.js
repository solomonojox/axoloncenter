function sendEmail() {
  Email.send({
    SecureToken : "f4c34865-b185-4e7d-a984-a5edc6cfbd08",
    // Port: 2525, Server
    // Host : "smtp.elasticemail.com",
    // Username : 'solomonakpas@gmail.com',
    // Password : "869A83FE9CA3213A270423465ACA234DC983",
    To : 'solomonakpas@gmail.com',
    From : "solomonakpas@gmail.com",
    Subject : "New Contact Form Enquiry",
    Body : "Name: " + document.getElementById("fullName").value + "<br> Email: " + document.getElementById("email").value + "<br> Phone: " + document.getElementById("phone").value + "<br> Address: " + document.getElementById("address").value + "<br> Event Type: " + document.getElementById("eventType").value + "<br> Guest size: " + document.getElementById("guestSize").value + "<br> Event Date: " + document.getElementById("eventDate").value + "<br> Event Time: " + document.getElementById("eventTime").value
  }).then(
    message => alert('Your message has been sent')
  );
}