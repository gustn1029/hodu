// header fixed
const header = document.getElementById("header");

const headerFixed = () => {
  if (window.scrollY > header.clientHeight) {
    header.classList.add("fixed");
  } else {
    if (header.classList.contains("fixed")) {
      header.classList.remove("fixed");
    }
  }
};

// mobile menu 
const viewMenuBtn = document.querySelector(".view-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const nav = document.getElementById("nav");

const viewMenu = (e) => {
    e.preventDefault();
    nav.classList.add("view");
}

const closeMenu = (e) => {
    e.preventDefault();
    nav.classList.remove("view");
}

// subscribe function
const subscribeBtn = document.querySelector(".subscribe-btn");
const emailInput = document.getElementById("email-input");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");

const subscribe = (e) => {
  e.preventDefault();
  const email = emailInput.value;

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const test = emailPattern.test(email);

  if (test) {
    modal.classList.remove("hidden");
    emailInput.value = "";
  } else {
    alert("이메일을 정확하게 입력해주세요.");
  }
};

const closeModal = () => {
  modal.classList.add("hidden");
};

window.addEventListener("scroll", headerFixed);
viewMenuBtn.addEventListener("click", viewMenu);
closeMenuBtn.addEventListener("click", closeMenu);
subscribeBtn.addEventListener("click", subscribe);
closeBtn.addEventListener("click", closeModal);
