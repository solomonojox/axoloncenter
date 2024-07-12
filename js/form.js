const customerDetail = JSON.parse(localStorage.getItem('info')) || [];
console.log(customerDetail)

const customerInfo = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  address: '',
  event_type: '',
  guest_size: '',
  event_date: '',
  event_time: ''
}

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', function validateMyForm() {
  let isValid = true;

  // Clear previous errors
  document.querySelectorAll('.error').forEach(error => error.textContent = '');

  // Get form fields
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const eventType = document.getElementById('eventType').value;
  const guestSize = document.getElementById('guestSize').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventTime = document.getElementById('eventTime').value;
  // const successMsg = document.getElementById('successMsg');

  customerInfo.first_name += firstName
  customerInfo.last_name += lastName
  customerInfo.email += email
  customerInfo.phone += phone
  customerInfo.address += address
  customerInfo.event_type += eventType
  customerInfo.guest_size += guestSize
  customerInfo.event_date += eventDate
  customerInfo.event_time += eventTime

  // console.log(customerInfo)

  // Validate each field
  if (firstName === '') {
      document.getElementById('firstNameError').textContent = 'First name is required';
      isValid = false;
  }
  if (lastName === '') {
      document.getElementById('lastNameError').textContent = 'Last name is required';
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
    customerDetail.push(customerInfo)
    alert('Thank you for your booking. We will contact you shortly.')
    location.reload();
  }
  
  localStorage.setItem('info', JSON.stringify(customerDetail))
  return isValid;
})

const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', function() {
  localStorage.clear();
  location.reload();
})