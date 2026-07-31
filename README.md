# uncleriot.github.io

Modular static website for presenting UncleRiot projects through GitHub Pages.

## Structure

- `index.html` — landing page and featured project
- `projects/` — individual project overview pages
- `pages/` — documentation, about, support and legal pages
- `assets/js/config.js` — central brand, link and project configuration
- `assets/js/site.js` — shared navigation and footer
- `assets/js/projects.js` — dynamic project cards
- `assets/css/` — shared and page-specific styling

## Most common edits

- Add or edit a project: `assets/js/config.js`
- Change colors and global design: `assets/css/base.css`
- Change the homepage layout: `index.html` and `assets/css/home.css`
- Change shared navigation/footer: `assets/js/site.js`
- Add legal details: `pages/imprint.html` and `pages/privacy.html`

## Publishing

Upload the complete contents to the root of the `uncleriot.github.io` repository. GitHub Pages should publish from the `main` branch and `/(root)`.
