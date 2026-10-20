// Highlights the current page in the nav.
document.querySelectorAll("nav a").forEach((link) => {
  const here = location.pathname.replace(/index\.html$/, "");
  const target = link.getAttribute("href").replace(/index\.html$/, "");
  if (here === target) link.style.color = "var(--accent)";
});
