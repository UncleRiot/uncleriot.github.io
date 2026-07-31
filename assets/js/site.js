(function () {
  const config = window.SITE_CONFIG;
  if (!config) return;

  const path = window.location.pathname;
  const isRoot = path === "/" || path.endsWith("/index.html");
  const base = isRoot ? "." : "..";

  const icons = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.24c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.58-.29-5.29-1.29-5.29-5.75 0-1.27.45-2.31 1.2-3.12-.12-.29-.52-1.48.11-3.08 0 0 .98-.31 3.16 1.19a10.95 10.95 0 0 1 5.75 0c2.18-1.5 3.16-1.19 3.16-1.19.63 1.6.23 2.79.11 3.08.75.81 1.2 1.85 1.2 3.12 0 4.47-2.72 5.45-5.31 5.74.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };

  const projectMenu = config.projects.map(project =>
    `<a href="${project.page}"><span>${project.name}</span><small>${project.tagline}</small></a>`
  ).join("");

  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.innerHTML = `
      <header class="site-header" data-header>
        <div class="nav-shell">
          <a class="brand" href="${base}/index.html" aria-label="UncleRiot home">
            <span class="brand-mark">UR</span>
            <span class="brand-text">${config.brand.name}</span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>${icons.menu}</button>
          <nav class="site-nav" id="site-nav" data-nav>
            <a href="${base}/index.html">Home</a>
            <div class="nav-dropdown">
              <button type="button" data-project-toggle>Projects <span aria-hidden="true">⌄</span></button>
              <div class="dropdown-panel">${projectMenu}</div>
            </div>
            <a href="${base}/pages/documentation.html">Documentation</a>
            <a href="${base}/pages/about.html">About</a>
            <a href="${base}/pages/support.html">Support</a>
          </nav>
          <a class="avatar-link" href="${config.links.githubProfile}" target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
            <img src="${config.brand.avatarUrl}" alt="UncleRiot GitHub avatar">
            <span class="icon">${icons.github}</span>
          </a>
        </div>
      </header>`;
  }

  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="footer-grid">
          <div><strong>${config.brand.name}</strong><p>${config.brand.tagline}</p></div>
          <div class="footer-links">
            <a href="${base}/pages/imprint.html">Imprint</a>
            <a href="${base}/pages/privacy.html">Privacy</a>
            <a href="${config.links.koFi}" target="_blank" rel="noreferrer">Ko-fi</a>
          </div>
        </div>
        <div class="footer-meta">© <span data-year></span> UncleRiot. Project names and trademarks belong to their respective owners.</div>
      </footer>`;
  }

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.innerHTML = open ? icons.close : icons.menu;
    });
  }

  const projectToggle = document.querySelector("[data-project-toggle]");
  if (projectToggle) {
    projectToggle.addEventListener("click", () => projectToggle.parentElement.classList.toggle("is-open"));
  }

  document.addEventListener("click", (event) => {
    const dropdown = document.querySelector(".nav-dropdown");
    if (dropdown && !dropdown.contains(event.target)) dropdown.classList.remove("is-open");
  });
})();
