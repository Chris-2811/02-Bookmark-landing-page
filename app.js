const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const arrows = document.querySelectorAll(".arrow");
const email = document.getElementById("email");
const form = document.getElementById("form");

console.log(panels);

const bookmarkContent = document.getElementById("bookmark-content");
const searchingContent = document.getElementById("searching-content");
const sharingContent = document.getElementById("sharing-content");

console.log(tabs);

function openModal() {
  menu.style.display = "flex";
  menu.classList.add("flex");
  open.style.display = "none";
  close.style.display = "block";

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-light.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}

function closeModal() {
  menu.style.display = "none";
  menu.classList.remove("flex");
  open.style.display = "block";
  close.style.display = "none";
}

// Change tab
function onTabClick(e) {
  tabs.forEach((tab) => {
    tab.firstElementChild.style.display = "none";
    e.target.firstElementChild.style.display = "block";
    tab.classList.remove("active");
    e.target.classList.add("active");
  });

  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

// Validate Email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* Eventlistener */
open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);

tabs.forEach((tab) => {
  tab.addEventListener("click", onTabClick);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value === "" || !validateEmail(email.value)) {
    document.querySelector(".form-control").classList.add("error");
    document.getElementById("message").style.visibility = "visible";
  } else {
    document.querySelector(".form-control").classList.remove("error");
    document.getElementById("message").style.visibility = "hidden";
  }

  email.value = "";
});

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("rotate");
    console.log(e.target);
    const activeTab = e.target.parentElement.parentElement;
    const innerContent = activeTab.nextElementSibling;
    innerContent.classList.toggle("hidden");
  });
});
