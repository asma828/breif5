document.addEventListener("DOMContentLoaded", () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        document.getElementById('firstName').value = user.name.first;
        document.getElementById('lastName').value = user.name.last;
        document.getElementById('email').value = user.email;
        document.getElementById('phone').value = user.phone;
      })
      .catch(error => console.error('Error fetching user data:', error));
  });
  
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  function validateForm() {
    //console.log(event);
    event.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!nameRegex.test(firstName)) {
      alert('thank you for adding a new name');
      return false;
    }
    if (!nameRegex.test(lastName)) {
      alert('thank you for adding a new name');
      return false;
    }
    if (!emailRegex.test(email)) {
      alert('thank you for adding your email');
      return false;
    }
    if (!phoneRegex.test(phone)) {
      alert('thank you for adding your phone number');
      return false;
    }
    if (message === '') {
      alert('thank you for adding your a message');
      return false;
    }
  
    return true;
  }

  document.getElementById('submitBtn').addEventListener('click', validateForm);
  