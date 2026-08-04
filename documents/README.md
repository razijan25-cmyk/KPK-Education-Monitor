# Kpedu Educational Portal

## Project Overview
The Kpedu portal is a modern, data-driven web platform developed for the Khyber Pakhtunkhwa (KP) Elementary and Secondary Education Department. The architecture is engineered to provide extreme accessibility and transparent data presentation regarding regional educational challenges, specifically the Out-of-School Children (OOSC) crisis, severe teacher deployment imbalances, and widespread infrastructural deficits.

## Architectural Framework
The platform is built utilizing the Antigravity design methodology, prioritizing performance and cross-device fluidity.

*   **Fluid Typography:** Uses CSS `clamp()` functions to ensure typography mathematically scales across all viewports without relying on brittle media queries.
*   **Adaptive Navigation Swap:** Transitions seamlessly from a wide desktop inline navigation bar to an off-canvas, touch-optimized mobile menu.
*   **Modular Responsiveness:** Employs CSS Grid and Container Queries to execute Column-to-Stack layout shifts, ensuring complex data dashboards remain legible on low-end mobile devices.
*   **Accessibility First:** Enforces WCAG 2.2 touch-target minimums (24x24px scaling to 48dp) and colorblind-safe data visualizations.

## Directory Structure
The repository is modularized to separate configuration, documentation, and public-facing assets.

*   `documents/`: Contains system blueprints and this repository documentation.
*   `public/`: The root directory for the deployable application.
*   `public/components/`: Houses reusable UI structural files (headers, footers, meta tags).
*   `public/dashboards/`: Contains specialized layouts for rendering civic data and Annual School Census metrics.
*   `public/articles/`: Contains reading-optimized layouts for policy briefs and administrative news.
*   `public/css/`: Modular stylesheets divided by function (layout, typography, navigation, main).

## Local Development Instructions
The project relies on Firebase for deployment. To view the site locally and test layout shifts during development, utilize the integrated terminal.

### Using Firebase CLI (Recommended)
This method perfectly mirrors the production environment.
1. Open the terminal at the project root (`D:\kpedu_project`).
2. Execute the local server command:
   ```bash
   firebase serve