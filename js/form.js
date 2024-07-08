const customerDetail = JSON.parse(localStorage.getItem('info')) || [];
  console.log(customerDetail)

  const customerInfo = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    event_type: '',
    payment_type: ''
  }
  function validateForm() {
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
    const paymentMethod = document.getElementById('paymentMethod').value;

    customerInfo.first_name += firstName
    customerInfo.last_name += lastName
    customerInfo.email += email
    customerInfo.phone += phone
    customerInfo.address += address
    customerInfo.event_type += eventType
    customerInfo.payment_type += paymentMethod

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
        document.getElementById('eventTypeError').textContent = 'Event type is required';
        isValid = false;
    }
    if (paymentMethod === '') {
        document.getElementById('paymentMethodError').textContent = 'Payment method is required';
        isValid = false;
    }

    if(isValid){
      customerDetail.push(customerInfo)
      console.log(customerDetail)
    }

    localStorage.setItem('info', JSON.stringify(customerDetail))
    return isValid;
  }