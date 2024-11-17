document.addEventListener("DOMContentLoaded", () => {
    const refillBtn = document.getElementById("refillBtn");
    const submitBtn = document.getElementById("submitBtn");
  
    // refill button click event
    refillBtn.addEventListener("click", () => {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
          const user = data.results[0];
          document.getElementById("firstName").value = user.name.first;
          document.getElementById("lastName").value = user.name.last;
          document.getElementById("email").value = user.email;
          document.getElementById("phone").value = user.phone || "+212-600000000";
          document.getElementById("message").value =
            "Hello! This is a sample message fetched with the API.";
          alert("Form has been refilled with random user data.");
        })
        .catch((error) => console.error("Error fetching user data:", error));
    });
  
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;
    function validateForm(event) {
      event.preventDefault();
  
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();
  // conditions for validation and alert messages
      if (!nameRegex.test(firstName)) {
        alert("Please enter a valid first name.");
        return false;
      }
      if (!nameRegex.test(lastName)) {
        alert("Please enter a valid last name.");
        return false;
      }
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
      if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number (10-15 digits).");
        return false;
      }
      if (message === "") {
        alert("Please enter a message.");
        return false;
      }
  
      alert("Thank you! Your form has been submitted successfully.");
      return true;
    }
    submitBtn.addEventListener("click", validateForm);
  });
  