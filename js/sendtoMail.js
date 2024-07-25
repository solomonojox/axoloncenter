const customerDetail = JSON.parse(localStorage.getItem('info')) || [];
console.log(customerDetail)

const customerInfo = {
  full_name: '',
  email: '',
  phone: '',
  address: '',
  event_type: '',
  guest_size: '',
  event_date: '',
  event_time: ''
}

const submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('click', function validateMyForm(e) {
    // e.preventDefault()
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Get form fields
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const eventType = document.getElementById('eventType').value;
    const guestSize = document.getElementById('guestSize').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;

    customerInfo.full_name += fullName
    customerInfo.email += email
    customerInfo.phone += phone
    customerInfo.address += address
    customerInfo.event_type += eventType
    customerInfo.guest_size += guestSize
    customerInfo.event_date += eventDate
    customerInfo.event_time += eventTime

    // console.log(customerInfo)

    // Validate each field
    if (fullName === '') {
        document.getElementById('fullNameError').textContent = 'First name is required';
        isValid = false;
    }
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    }
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required';
        isValid = false;
    }
    if (address === '') {
        document.getElementById('addressError').textContent = 'House address is required';
        isValid = false;
    }
    if (eventType === '') {
        document.getElementById('eventTypeError').textContent = 'required';
        isValid = false;
    }
    if (guestSize === '') {
        document.getElementById('guestSizeError').textContent = 'required';
        isValid = false;
    }
    if (eventDate === '') {
        document.getElementById('eventDateError').textContent = 'required';
        isValid = false;
    }
    if (eventTime === '') {
        document.getElementById('eventTimeError').textContent = 'required';
        isValid = false;
    }

    if(isValid){
      sendEmail()
      customerDetail.push(customerInfo)
    }

    localStorage.setItem('info', JSON.stringify(customerDetail))
    return isValid;
})
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