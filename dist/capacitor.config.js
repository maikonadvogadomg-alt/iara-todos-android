/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: 'br.adv.maikoncaldeira.iarasuite',
  appName: 'Iara Suite',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: false,
  },
  android: {
    buildOptions: {
      releaseType: 'APK',
    },
    allowMixedContent: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

module.exports = config;
