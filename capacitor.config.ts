import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.osblack.promptarchitect',
  appName: 'OSBlack Prompt Architect',
  webDir: 'dist-mobile',
  server: { androidScheme: 'https' },
  android: { allowMixedContent: false, webContentsDebuggingEnabled: false },
};

export default config;
