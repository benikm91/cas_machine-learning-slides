# Project: CAS Machine Learning Slides

## Project Overview
This project serves as an interactive slide deck for a "CAS Data Science - Machine Learning" course. It is primarily an Angular web application built with TypeScript, leveraging `reveal.js` for presentation functionalities, `pug` for templating Angular components, and SCSS for styling. The architecture includes custom Webpack configurations to handle specific file types like Pug and LaTeX (`.tex` files). A unique aspect of this project is the generation of "hand-made" machine learning illustrations (plots, decision trees, 3D visualizations, GIFs) using Python in Jupyter Notebooks, which are then integrated into the slides.

## Building and Running

### Prerequisites
- Node.js and npm (or yarn)
- Python (for running Jupyter Notebooks in `code-examples`)

### Install Dependencies
To install all necessary npm packages for the Angular application:
```bash
npm i
```

### Serve Locally
To run a development server and view the slides locally:
```bash
npm run serve
```
The application will typically be accessible at `http://localhost:4200/`. It features live reloading on source file changes.

### Build for Production
To build the project for production deployment, generating optimized artifacts in the `dist/cas-ml-slides/` directory:
```bash
npm run build
```

### Build for GitHub Pages
For deploying the slides to GitHub Pages, use the specific build command which configures the base href:
```bash
npm run build-github-pages
```

### Run Tests
To execute the project's unit tests (configured with Karma):
```bash
npm run test
```

### Debug Bundle Size
To analyze the Webpack bundle size:
```bash
ng build --stats-json
webpack-bundle-analyzer dist/cas-ml-slides/stats.json
```

## Development Conventions

### Technologies
- **Frontend:** Angular (TypeScript), `reveal.js`, `animejs`, `d3`, `bootstrap`.
- **Templating:** Pug templates (`.pug`) are used for Angular components.
- **Styling:** SCSS, Bootstrap, and a custom `reveal.js` theme.
- **Illustrations:** Python 3 within Jupyter Notebooks (`.ipynb`) in the `code-examples/plots` directory for generating all visual aids. Key Python libraries include `scikit-learn`, `matplotlib`, `seaborn`, `numpy`, `pandas`, and `imageio`.
- **Custom Webpack:** The project utilizes a custom Webpack configuration (`./webpack.config.js`) via `@angular-builders/custom-webpack` to handle `.pug` and `.tex` files, and to configure aliases for `reveal.js` components.
- **Testing Framework:** Karma.

### Workflow
- Angular components use Pug for HTML templating and SCSS for styling.
- Machine learning concepts and algorithms are visually explained through custom-generated plots and animations created in Jupyter Notebooks. These outputs (images, GIFs) are then integrated into the slides.
- Custom Webpack rules facilitate the inclusion of `.pug` and `.tex` content directly into the Angular build process.
- Type checking and strict mode are enabled in TypeScript configuration (`tsconfig.json`) to maintain code quality.
