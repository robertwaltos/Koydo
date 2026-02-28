import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.koydo.app',
  appName: 'Koydo',
  webDir: 'out',
  plugins: {
    CapacitorHttp: {
      enabled: false,
    },
    RevenueCat: {
      // Configuration applied in code
    },
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    }
  },
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
    // During dev we might use localhost/dev server URL:
    // url: "http://192.168.1.xxx:3000",
    // cleartext: true
  }
};

export default config;
