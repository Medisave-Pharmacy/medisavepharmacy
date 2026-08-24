async function includeHTML(id, file) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(file);
  const html = await res.text();
  el.insertAdjacentHTML("afterend", html);
  el.remove();
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    includeHTML("header-placeholder", "/header.html"),
    includeHTML("footer-placeholder", "/footer.html")
  ]);

  // Set the active nav link based on the current page
  const currentFile = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(link => {
    const linkFile = link.getAttribute("href").split("/").pop();
    if (linkFile === currentFile) {
      link.classList.add("active");
    }
  });
});