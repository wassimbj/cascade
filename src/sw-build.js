/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

const workboxBuild = require("workbox-build");

// NOTE: This should be run *AFTER* all the assets are built
const buildSW = () => {
  // This will return a Promise
  // The build is expected to fail if the sw install rules couldn't be generated
  return workboxBuild
    .injectManifest({
      swSrc: "src/sw-custom.js", // custom sw rules
      swDest: "build/sw.js", // sw output files
      globDirectory: "build",
      globPatterns: ["**/*.{js,css,html,png,svg,woff,woff2}"],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
    })
    .then(({ count, size, warnings }) => {
      warnings.forEach(console.warn);
      console.info(
        `${count} files will be precached, totaling ${size /
          (1024 * 1024)} MBs.`
      );
    });
};
buildSW();
