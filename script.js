const spotlight = document.querySelector(".spotlight");
const intro = document.querySelector("#intro");
const home = document.querySelector("#home");
const tea = document.querySelector("#tea");
const about = document.querySelector("#about");

function scrollToSection(section) {
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("pointermove", (event) => {
  if (spotlight) {
    spotlight.style.setProperty("--x", `${event.clientX}px`);
    spotlight.style.setProperty("--y", `${event.clientY}px`);
  }

  document.querySelectorAll(".eye").forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const distance = Math.min(24, Math.hypot(event.clientX - centerX, event.clientY - centerY) / 16);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    eye.style.setProperty("--look-x", `${x}px`);
    eye.style.setProperty("--look-y", `${y}px`);
  });
});

document.querySelectorAll(".js-enter").forEach((button) => {
  button.addEventListener("click", () => scrollToSection(home));
});

document.querySelectorAll(".js-tea").forEach((button) => {
  button.addEventListener("click", () => scrollToSection(tea));
});

document.querySelectorAll("[data-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;

    if (target === "home") scrollToSection(home);
    if (target === "tea") scrollToSection(tea);
    if (target === "about") scrollToSection(about);
  });
});

document.querySelectorAll("[data-note]").forEach((button) => {
  button.addEventListener("click", () => {
    const note = document.getElementById(button.dataset.note);
    note?.classList.toggle("is-open");
  });
});

document.querySelectorAll(".drag-item").forEach((item) => {
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  item.addEventListener("pointerdown", (event) => {
    dragging = true;
    item.setPointerCapture(event.pointerId);
    startX = event.clientX;
    startY = event.clientY;
    startLeft = item.offsetLeft;
    startTop = item.offsetTop;
    item.style.zIndex = "30";
  });

  item.addEventListener("pointermove", (event) => {
    if (!dragging) return;

    const nextLeft = startLeft + event.clientX - startX;
    const nextTop = startTop + event.clientY - startY;
    item.style.left = `${nextLeft}px`;
    item.style.top = `${nextTop}px`;
  });

  item.addEventListener("pointerup", () => {
    dragging = false;
    item.style.zIndex = "";
  });

  item.addEventListener("pointercancel", () => {
    dragging = false;
    item.style.zIndex = "";
  });
});

const message = "hey upper east siders... gossip never sleeps. tap the tea, follow the clues, and remember: you know you love me. xoxo.";
const phoneText = document.querySelector(".phone-text");
let typeIndex = 0;

function typeMessage() {
  if (!phoneText) return;
  phoneText.textContent = message.slice(0, typeIndex);
  typeIndex = typeIndex >= message.length ? 0 : typeIndex + 1;
  window.setTimeout(typeMessage, typeIndex === 0 ? 1100 : 58);
}

typeMessage();
