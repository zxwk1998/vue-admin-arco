import { mergeConfig } from 'vite';
import baseConig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'production',
    build: {
      chunkSizeWarningLimit:20480,
      reportCompressedSize: false,
      rollupOptions: {
        onwarn: () => {
          return
        },
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames:'static/[ext]/[name]-[hash].[ext]'
        },
      },
      minify:'esbuild',
      target: 'es2015',
      sourcemap: false,
    },
  },
  baseConig
);
