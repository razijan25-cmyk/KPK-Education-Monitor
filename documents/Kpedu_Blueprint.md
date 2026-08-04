# Kpedu Educational Portal: Antigravity Architectural & Design Specification

## 1. Project Overview & Civic Imperatives
The Kpedu portal is a state-of-the-art educational platform designed for the Khyber Pakhtunkhwa (KP) Elementary and Secondary Education Department [cite: 1]. The architecture synthesizes high-performance responsive design with complex data taxonomies to address critical regional challenges, including the out-of-school children (OOSC) crisis, severe teacher deployment imbalances ("The Missing Ustaani"), and critical infrastructure deficits [cite: 1].

## 2. Antigravity UI & Layout Framework
The core layout relies on fluid scaling, modular architectures, and rigorous accessibility standards [cite: 1]. The following directives must be passed to the Antigravity framework during the build phase.

### 2.1 Main Body & Responsive Flow
*   **Direct Instruction to Antigravity:** "Make the main body fully responsive, using Column-to-Stack shifts for the layouts, fluid typography for the headings, and touch-optimized padding for mobile." [cite: 1]
*   **Reading Experience:** Enforce a fluid, bezel-less, edge-to-edge reading experience [cite: 1]. Strip away sidebars and distractions to maintain a highly structured white grid [cite: 1]. 
*   **Desktop Layout:** Utilize a strict, split-screen layout for complex documentation [cite: 1]. Explanatory text resides in a bright white reading area, while high-resolution, full-width diagrams or dark code-blocks remain pinned and sticky on the opposing side [cite: 1].

### 2.2 Navigation Architecture
*   **Adaptive Navigation Swap:** The header must utilize a "Hamburger-to-Inline Navbar" transition [cite: 1]. On mobile, the wide desktop navigation gracefully collapses into an accessible, highly padded off-canvas menu [cite: 1].
*   **Bottom & Trail Navigation:** Integrate a unified global navigation shell, complete with a solid, minimal bottom bar and breadcrumb navigation featuring a subtle trail [cite: 1]. 
*   **Touch Optimization:** All mobile navigation targets must adhere to WCAG 2.2 standards, enforcing a minimum of 24x24 CSS pixels, expanding to 48dp to eliminate fat-finger errors for mobile users [cite: 1].

## 3. Data Structure & Taxonomy
Organizing the dense bureaucratic data of the KP education sector requires a robust architectural floor plan [cite: 1].

### 3.1 Faceted Taxonomy
Avoid flat timelines. Implement a multidimensional faceted taxonomy that allows users to simultaneously filter data by:
*   **Geographic District:** (e.g., Peshawar, Swat, Kohistan) [cite: 1].
*   **Systemic Issue:** (e.g., Infrastructure, Teacher Deployment, Enrollment) [cite: 1].
*   **Content Type:** (e.g., Policy Brief, Data Dashboard) [cite: 1].

### 3.2 Impact Tracking (MORI Blueprint)
Categorize published civic data by intended outcome to track efficacy [cite: 1]:
*   **Informed Debate:** Metrics demonstrating how publications influence public discourse [cite: 1].
*   **Informed Action:** Tangible outcomes such as legislative action or targeted policy interventions [cite: 1].

## 4. Complex Data Visualization
The portal will host real-time metrics from the Annual School Census (ASC) and the Education Monitoring Authority (KPEMA) [cite: 1]. 

*   **Responsive Dashboards:** Use CSS Container Queries to build modular, self-resizing indicator cards detailing missing facilities like boundary walls, electricity, and functional washrooms [cite: 1].
*   **Tabular Data:** Complex financial ledgers, such as Parent Teacher Council (PTC) fund disbursements, must be wrapped in CSS containers utilizing `overflow-x: auto` [cite: 1]. This ensures horizontal scrolling is isolated to the table, preventing the viewport layout from breaking on mobile screens [cite: 1].
*   **Accessible Charts:** Ensure data visualizations deploy colorblind-safe palettes, direct text labeling, and distinct geometric markers rather than relying solely on color [cite: 1].

## 5. Development & Deployment Workflow
To maintain rapid iteration cycles and stringent version control during the development of this platform, the following toolchain integration is recommended:
*   **Version Control:** Initialize the project repository via GitHub to manage source code, track collaborative iterations, and secure access tokens.
*   **Mobile/Local Development:** Utilize Spck Editor to compile and manage files on the go, ensuring continuous coding momentum away from a desktop environment.
*   **Hosting & Infrastructure:** Configure the technical project and deploy final builds on the Google Cloud Platform (GCP) for scalable, secure hosting of the portal's data architectures.
