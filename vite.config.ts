import type { UserConfig, ConfigEnv } from 'vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
  return {
    base: '/vue-admin-arco/',
  };
});
