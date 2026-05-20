import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.skjuridico.app',
  appName: 'SK Jurídico',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
