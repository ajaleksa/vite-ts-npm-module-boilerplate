/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'moduleName',
      fileName: 'moduleName',
    },
  },
  plugins: [dts()],
  test: {
    files: ['tests/**/*'],
    threads: false,
    testTimeout: 100000,
  },
});
