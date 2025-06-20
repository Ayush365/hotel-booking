// Scroll to top on logo click
const logo = document.querySelector('.logo');
if (logo) {
  logo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Hover animation on cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});

// Open login/signup modal
function openAuth() {
  document.getElementById("authOverlay").style.display = "flex";
}

// Close modal
function closeAuth() {
  document.getElementById("authOverlay").style.display = "none";
}

// Toggle between Login and Sign Up forms
function toggleAuth() {
  const loginBox = document.getElementById("loginBox");
  const signupBox = document.getElementById("signupBox");
  loginBox.classList.toggle("hidden");
  signupBox.classList.toggle("hidden");
}

// Login link event listener
const loginLink = document.querySelector('.login-link');
if (loginLink) {
  loginLink.addEventListener('click', openAuth);
}

// Close modal when clicking outside of modal
const modalOverlay = document.getElementById("authOverlay");
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeAuth();
  }
});

// Login form validation
function validateLoginForm() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Simple login check (replace with actual logic)
  if (email === "test@royalstay.com" && password === "password123") {
    alert("Login Successful!");
    closeAuth();  // Close modal on success
    return true;
  } else {
    document.getElementById("loginError").style.display = "block";
    return false;
  }
}

// Sign-Up form validation
function validateSignUpForm() {
  const fullName = document.getElementById("signupFullName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword").value;

  // Password match check
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  // Account creation logic (replace with your own)
  alert("Account Created Successfully!");
  closeAuth();  // Close modal after sign-up
  return true;
}

console.log("RoyalStay interactive JS loaded.");
