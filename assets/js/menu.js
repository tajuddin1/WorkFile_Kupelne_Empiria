const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

const body = document.body;

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  burgerBtn.classList.toggle("active");
  if (navMenu.classList.contains("show")) {
    navMenu.style.maxHeight = navMenu.scrollHeight + "px";
    body.style.overflow = "hidden";
  } else {
    navMenu.style.maxHeight = "";
    body.style.overflow = "auto";
  }
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    burgerBtn.classList.remove("active");
    navMenu.style.maxHeight = "";
    body.style.overflow = "auto";
  });
});

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
      burgerBtn.classList.remove("active");
      navMenu.style.maxHeight = "";
      body.style.overflow = "auto";
    }
  }
});

// Filter Menu

const filterBtn = document.getElementById("filterBtn");
const crossBtn = document.getElementById("crossBtn");
const sidebar = document.getElementById("sidebar");

filterBtn.addEventListener("click", () => {
  sidebar.classList.add("show");
});

sidebar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
});

crossBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !filterBtn.contains(e.target)) {
    if (sidebar.classList.contains("show")) {
      sidebar.classList.remove("show");
    }
  }
});
