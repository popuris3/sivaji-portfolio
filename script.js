// Mobile nav + tiny utilities
const toggle = document.querySelector(".navToggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

// Mermaid
if (window.mermaid) {
  mermaid.initialize({ startOnLoad: true, theme: "dark" });
}

// Copy diagram button (copies the Mermaid source)
document.querySelectorAll(".copyMermaid").forEach(btn => {
  btn.addEventListener("click", async () => {
    const id = btn.getAttribute("data-target");
    const el = document.getElementById(id);
    if (!el) return;
    const text = el.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      const old = btn.textContent;
      btn.textContent = "Copied";
      setTimeout(() => (btn.textContent = old), 900);
    } catch (e) {
      alert("Copy failed. You can select and copy manually.");
    }
  });
});
