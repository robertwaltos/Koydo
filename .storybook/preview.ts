import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

/**
 * Device viewport presets matching our Playwright config.
 * Use the Viewport toolbar in Storybook to switch between them.
 */
const VIEWPORTS = {
  iphoneSE: {
    name: "iPhone SE",
    styles: { width: "375px", height: "667px" },
  },
  iphone15: {
    name: "iPhone 15",
    styles: { width: "393px", height: "852px" },
  },
  iphone15ProMax: {
    name: "iPhone 15 Pro Max",
    styles: { width: "430px", height: "932px" },
  },
  pixel7: {
    name: "Pixel 7",
    styles: { width: "412px", height: "915px" },
  },
  galaxyS9: {
    name: "Galaxy S9+",
    styles: { width: "412px", height: "846px" },
  },
  iPadMini: {
    name: "iPad Mini",
    styles: { width: "768px", height: "1024px" },
  },
  iPadPro11: {
    name: "iPad Pro 11",
    styles: { width: "834px", height: "1194px" },
  },
  iPadPro11Landscape: {
    name: "iPad Pro 11 (landscape)",
    styles: { width: "1194px", height: "834px" },
  },
  iPadPro129: {
    name: "iPad Pro 12.9",
    styles: { width: "1024px", height: "1366px" },
  },
  galaxyTabS8: {
    name: "Galaxy Tab S8",
    styles: { width: "800px", height: "1280px" },
  },
  laptop: {
    name: "Laptop (1280)",
    styles: { width: "1280px", height: "720px" },
  },
  desktop: {
    name: "Desktop (1440)",
    styles: { width: "1440px", height: "900px" },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: VIEWPORTS,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
