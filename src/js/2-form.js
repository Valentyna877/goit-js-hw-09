const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form");

let formData = {
  email: "",
  message: ""
};

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedData) {
  formData = savedData;
  form.elements.email.value = savedData.email || "";
  form.elements.message.value = savedData.message || "";
}

form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, message } = formData;
    
  if (!email || !message) {
    alert("Fill please all fields");
    return;
  }

  console.log('Submitted data:', formData);

  formData = { email: "", message: "" };
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

emailInput.addEventListener('focus', () => {
    emailInput.placeholder = 'Type area';
});
emailInput.addEventListener('blur', () => {
    emailInput.placeholder = '';
});

messageTextarea.addEventListener('focus', () => {
    messageTextarea.placeholder = 'Type area';
});
messageTextarea.addEventListener('blur', () => {
    messageTextarea.placeholder = '';
});