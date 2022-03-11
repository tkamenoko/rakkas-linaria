import { defineConfig, ViteConfig } from '@rakkasjs/cli';

import vite from './vite.config';

export default defineConfig({
  vite: vite as ViteConfig,
});
