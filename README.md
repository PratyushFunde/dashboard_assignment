
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

**Challenges**
1) Sales Chart Rendering Issue in Production

One of the key challenges occurred with the Sales chart (Apache ECharts) during deployment. While the chart rendered correctly in local development, it did not display or scale properly in the deployed environment (Vercel).

Problem

The chart was initializing before its container had a final size

In production builds, layout shifts caused by sidebar open/close animations and hydration timing differences caused ECharts to calculate incorrect dimensions

As a result, the chart appeared collapsed, clipped, or incorrectly sized after deployment

Solution

To resolve this, additional resize handling logic was introduced:

Delayed resize after initial mount to handle Vercel hydration and ensure the DOM was fully ready

Dynamic resizing when sidebars open or close, allowing the chart to adapt to layout changes

ResizeObserver to monitor container size changes for reliable scaling, even on slower production loads

This ensured consistent chart rendering across both development and production environments.

2) Layout & Responsiveness Challenge
Sidebar Layout Issues on Mobile Devices

Another significant challenge involved the overall dashboard layout and sidebar positioning, especially on mobile and smaller screen sizes.

Problem

The initial layout relied on margin-left and margin-right offsets to make space for the sidebars

Both left and right sidebars were positioned using position: fixed

This approach caused several issues on mobile devices:

Content overflow and hidden sections

Unwanted horizontal scrolling

Incorrect spacing when sidebars were toggled

Layout breaking on smaller screen widths

The margin-based layout approach did not adapt well to responsive design and caused inconsistencies across screen sizes.

Solution

To resolve these issues, the layout architecture was restructured:

The root layout was converted to a Flexbox-based structure, allowing the main content area to naturally adapt to available space

Sidebar spacing was removed from margin calculations and instead handled by Flexbox flow

Sidebars remain fixed only on smaller screens, behaving as overlay panels

On larger screens, sidebars participate in the normal layout flow, ensuring stable and predictable responsiveness

This redesign eliminated layout shifts, improved mobile usability, and resulted in a more robust and responsive dashboard layout.

3) Theme (Dark / Light Mode) Consistency Challenge
Styling Inconsistencies Across Dark and Light Modes

Another challenge involved maintaining consistent styling across dark and light themes, particularly for financial cards, charts, and Ant Design tables.

Problem

Initially, component colors were hard-coded or tied directly to Tailwind utility classes

This caused inconsistencies when switching between light and dark modes, including:

Financial cards displaying incorrect background or text colors

Charts and UI elements not adapting correctly to theme changes

Ant Design table headers, rows, and hover states not respecting the active theme

Managing theme styles directly inside components became difficult and error-prone as the UI scaled

Solution

To address this, a CSS variable–driven theming approach was introduced:

Theme colors were centralized using CSS custom properties defined in :root (light mode) and .dark (dark mode)

Financial card colors were abstracted into reusable utility mappings:

finCardBg for background colors

finCardText for text colors

These utilities reference CSS variables, ensuring automatic theme switching without modifying component logic

Ant Design table styles were overridden globally using CSS variables to ensure:

Proper background, text, border, and hover colors

Consistent appearance across both themes

This approach made theme switching seamless and significantly improved maintainability

Outcome

Dark and light modes now render consistently across all components

Theme logic is centralized, reducing duplication and styling bugs

New components can support theming easily by referencing existing CSS variables