async function setupNavToggle() {
  // Wait a bit for the header to be injected, or use a MutationObserver
  let toggle = document.querySelector(".nav-toggle");
  let nav = document.querySelector(".main-nav");
  
  // Poll for up to 2 seconds if not found
  let attempts = 0;
  while ((!toggle || !nav) && attempts < 20) {
    await new Promise(resolve => setTimeout(resolve, 100));
    toggle = document.querySelector(".nav-toggle");
    nav = document.querySelector(".main-nav");
    attempts++;
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", setupNavToggle);