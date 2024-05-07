import { mergeConfig } from 'vite'
import configArcoResolverPlugin from './plugin/arcoResolver'
import configCompressPlugin from './plugin/compress'
import configVisualizerPlugin from './plugin/visualizer'
import baseConfig from './vite.config.base'

export default mergeConfig(
  {
    mode: 'production',
    plugins: [configCompressPlugin('gzip'), configVisualizerPlugin(), configArcoResolverPlugin()],
    build: {
      chunkSizeWarningLimit: 20480,
      reportCompressedSize: false,
      rollupOptions: {
        onwarn: () => {},
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
      minify: 'esbuild',
      target: 'es2015',
      sourcemap: false,
    },
  },
  baseConfig
)
