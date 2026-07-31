(function () {
  const projects = window.SITE_CONFIG?.projects || [];
  const cards = document.querySelector("[data-project-grid]");
  if (cards) {
    cards.innerHTML = projects.map(project => `
      <article class="project-card accent-${project.accent}">
        <a class="project-visual" href="${project.page}" aria-label="Open ${project.name}">
          <span class="visual-grid"></span>
          <span class="project-symbol"><img src="${project.image}" alt="${project.name} app icon"></span>
          <span class="visual-caption">${project.name}</span>
        </a>
        <div class="project-card-body">
          <p class="eyebrow">${project.eyebrow}</p>
          <h3><a href="${project.page}">${project.name}</a></h3>
          <p>${project.description}</p>
          <div class="project-actions">
            <a class="text-link" href="${project.page}">Overview <span>→</span></a>
            <a class="text-link muted" href="${project.documentation}" target="_blank" rel="noreferrer">Wiki ↗</a>
          </div>
        </div>
      </article>`).join("");
  }

  const featured = projects.find(project => project.featured);
  if (featured) {
    document.querySelectorAll("[data-featured-name]").forEach(el => el.textContent = featured.name);
    document.querySelectorAll("[data-featured-tagline]").forEach(el => el.textContent = featured.tagline);
    document.querySelectorAll("[data-featured-description]").forEach(el => el.textContent = featured.description);
    document.querySelectorAll("[data-featured-page]").forEach(el => el.href = featured.page);
    document.querySelectorAll("[data-featured-docs]").forEach(el => el.href = featured.documentation);
    const list = document.querySelector("[data-featured-features]");
    if (list) list.innerHTML = featured.features.map(feature => `<li>${feature}</li>`).join("");
  }
})();
