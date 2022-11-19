# Figma Plugin Boilerplate

This codebase:

- bundles plugin code using Webpack
- uses React with Typescript
- uses [styled-components](https://styled-components.com/)

Figma plugins have two entry points: `src/plugin/index.ts` which executes in the Figma context and has access to the Document API, and `src/ui/index.tsx` which has access to a browser/IFRAME context inside the plugin window.

These are compiled to files in `dist/`, which are what Figma will use to run
the plugin.

### Commands

**Install and build:**

    $ npm i
    $ npm run build

**Local development (plugin and UI):**

    $ npm run dev

**Local development (UI only).**

This is handy for developing the UI part of the plugin as hot reloads in the browser and does not require closing / reopening the plugin to see changes.

    $ npm run web

**Run unit tests**

    $ npm test

**Collect unit tests coverage**

    $ npm run test-coverage

**Importing modules:**

Note that this repo uses webpack aliases to make component imports more ergonomic. See `webpack.config.js` under the `aliases` section for more info.
