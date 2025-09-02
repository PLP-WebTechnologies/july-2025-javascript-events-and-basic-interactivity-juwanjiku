// changing text on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("textOutput").textContent = "Thanks for visiting our page!";
});

// adding item to a list (interactive feature)
document.getElementById("addItemBtn").addEventListener("click", function() {
  const itemInput = document.getElementById("itemInput");
  const itemValue = itemInput.value.trim();

  if (itemValue !== "") {
    const li = document.createElement("li");
    li.textContent = itemValue;
    document.getElementById("itemList").appendChild(li);
    itemInput.value = "";
  } else {
    alert("Please type something before adding.");
  }
});

// custom form validation
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop default form submission
  let errors = [];

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const mode = document.querySelector("input[name='mode']:checked");
  const experience = document.getElementById("experience").value;

  // Validation rules
  if (name === "") {
    errors.push("Name is required.");
  }

  if (email === "" || !email.includes("@")) {
    errors.push("Enter a valid email address.");
  }

  if (phone !== "" && !/^[0-9]{10,}$/.test(phone)) {
    errors.push("Phone number must be at least 10 digits (if provided).");
  }

  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  if (!mode) {
    errors.push("Select your preferred learning mode.");
  }

  if (experience === "") {
    errors.push("Choose your experience level.");
  }

  // Show feedback
  const message = document.getElementById("formMessage");
  if (errors.length > 0) {
    message.style.color = "red";
    message.textContent = errors.join(" ");
  } else {
    message.style.color = "green";
    message.textContent = "Registration successful!";
     //Pop-up ONLY if valid
    alert("Thank you for registering!");

    // reset form
    document.getElementById("registrationForm").reset();
  }
});
