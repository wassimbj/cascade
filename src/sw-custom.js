/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
  );

  /* global workbox */
  if (workbox) {
    // Disable logging
    workbox.setConfig({
      debug: false
    });

    /**
     * `generateSW` and `generateSWString` provide the option
     * to force update an exiting service worker.
     * Since using `injectManifest` to build SW,
     * manually overriding the skipWaiting();
     */
    self.addEventListener("install", event => {
      self.skipWaiting();
    });

    /**
     * Manual injection point for manifest files.
     * Auto sw build is being handled by `injectManifest`. See sw-build.js
     * All assets under build (max 5MB) are precached.
     * */
    workbox.precaching.precacheAndRoute([]);

    /**
     * Font caching
     */
    workbox.routing.registerRoute(
      new RegExp("https://fonts.(?:.googlepis|gstatic).com/(.*)"),
      workbox.strategies.cacheFirst({
        cacheName: "googleapis",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 30
          })
        ]
      })
    );

    /**
     * Image caching
     */
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      workbox.strategies.cacheFirst({
        cacheName: "images",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
          })
        ]
      })
    );

    /**
     * Using StaleWhileRevalidate for JS and styles
     * Initially the content is loaded from the cache and
     * simulatenously a network call also is made to fetch the content.
     * In case an update is available, the cache is updated.
     */
    workbox.routing.registerRoute(
      /\.(?:js|css)$/,
      workbox.strategies.staleWhileRevalidate({
        cacheName: "static-resources",
        plugins: [
          new workbox.expiration.Plugin({
            maxAgeSeconds: 14 * 24 * 60 * 60 // 14 Days
          })
        ]
      })
    );
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}
