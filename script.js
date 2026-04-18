document.querySelectorAll("a[href^='#']").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// typing effect
const text = "Full Stack .NET Developer | IT Student";
let i = 0;

function type() {
  const el = document.getElementById("typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text[i++];
    setTimeout(type, 80);
  }
}

type();

// =======================
// EMAILJS (WORKING SETUP)
// =======================

(function () {
  emailjs.init("rEG5Zy_qW_eomyGdD"); 
})();

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_s1ux51p",   
    "template_qy812dq", 
    e.target
  )
  .then(() => {
    alert("Message sent successfully!");
    e.target.reset();
  })
  .catch((error) => {
    alert("FAILED - check EmailJS setup");
    console.log(error);
  });
}

function toggleDark() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// load theme
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});