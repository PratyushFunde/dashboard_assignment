
# Dashboard — Figma to React (Vite)

This project implements a dashboard based on a Figma design using React and Vite. The app runs locally on port 5001 during development and is organized for clarity, reusability and easy maintenance.

**Quick Start**

- **Prerequisites:** Node.js (14+), `npm` or `yarn`.
- **Install:** `npm install`
- **Run (development):** `npm run dev` — open `http://localhost:5001` (the dev server is configured to use port 5001).
- **Override port (optional):** `npm run dev -- --port 5001`
- **Build:** `npm run build`
- **Preview production build:** `npm run preview -- --port 5001`

**Folder Structure**

- **`src/`**: Application source code.
	- **`assets/`**: Images, icons and other static assets.
	- **`components/`**: Reusable UI pieces, organized by feature:
		- **`cards/`**, **`charts/`**, **`ecommerce/`**, **`navigation/`**, **`tables/`**, **`user/`** — each contains focused components used across pages.
	- **`constants/`**: App-wide constants (for example, layout settings in `layout.constants.js`).
	- **`context/`**: React Context providers (`DashboardContext.jsx`, `LayoutContext.jsx`, `NotificationContext.jsx`, `SearchContext.jsx`, `ThemeContext.jsx`) for global state and cross-cutting concerns.
	- **`data/`**: Mock or static data used by the UI (e.g. `dashboard.mock.js`).
	- **`layouts/`**: Layout components such as `DashboardLayout.jsx` that compose pages.
	- **`pages/`**: Route-level pages (`Dashboard.jsx`, `OrderList.jsx`, `Users.jsx`).
	- **`utils/`**: Small helpers and utilities (for example, `finCardColors.js`).

- **Root files:** `index.html`, `package.json`, `vite.config.js`, `public/` and this `README.md`.

**How This Structure Helps Manage Code**

- **Separation of concerns:** UI, state, data and utilities live in separate folders so each area is easier to understand and modify.
- **Reusability:** Shared building blocks in `components/` reduce duplication and make visual updates consistent.
- **Scalability:** Clear subfolders (charts, navigation, etc.) let the project grow without becoming tangled.
- **Testability & maintainability:** Small, focused files are simpler to test and refactor.

**Notes**

- The UI follows the provided Figma design and uses React component composition for layouts and widgets.
- The development server listens on port `5001` by project configuration — open `http://localhost:5001` after `npm run dev`.


