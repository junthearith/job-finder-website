import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import sitemap from "vite-plugin-sitemap";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      viteCompression({
        verbose: true,
        disable: false,
        deleteOriginFile: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz",
      }),
      viteCompression({
        verbose: true,
        disable: false,
        deleteOriginFile: false,
        threshold: 10240,
        algorithm: "brotliCompress",
        ext: ".br",
      }),
      sitemap({
        hostname: "https://jobquick.techinsights.guru/",
      }),
      VitePWA({
        registerType: "autoUpdate", // Auto-update service worker
        includeAssets: [
          "favicon.ico",
          "robots.txt",
          "apple-touch-icon.png",
          "icons/*.svg",
        ], // Include assets
        manifest: {
          name: "JobQuick - Find Your Dream Job",
          short_name: "JobQuick",
          description:
            "Explore thousands of job opportunities with Job Quick. Find jobs that match your skills and advance your career.",
          theme_color: "#4a90e2",
          background_color: "#ffffff",
          display: "standalone",
          start_url: "/",
          icons: [
            {
              src: "/public/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/public/android-chrome-512x512.png",
              sizes: "425x469",
              type: "image/png",
            },
          ],
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,png,svg,ico}"], // Cache all necessary assets
          runtimeCaching: [
            {
              urlPattern: ({ url }) => url.origin === self.location.origin,
              handler: "NetworkFirst",
              options: {
                cacheName: "pages",
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                },
              },
            },
            {
              urlPattern: ({ url }) => url.pathname.startsWith("/api/"),
              handler: "NetworkFirst", // Always try to get fresh data from the API
              options: {
                cacheName: "api-cache",
                networkTimeoutSeconds: 10,
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: ({ url }) => url.pathname.match(/\/assets\/.*/),
              handler: "CacheFirst",
              options: {
                cacheName: "assets-cache",
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 24 * 60 * 60, // 60 Days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      }),
    ],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
    build: {
      outDir: "dist",
      sourcemap: true, // Enable source maps
      cssCodeSplit: true, // Enable CSS code splitting
      minify: "esbuild",
    },
    server: {
      port: 3000,
    },
  };
});
