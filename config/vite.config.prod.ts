import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'production',
  },
  { ...baseConfig, base: '/' }
);
