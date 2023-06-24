import { defineConfig, UserConfig } from 'vite'

export default defineConfig({
  slidev: {
    components: {
      extensions: ['vue', 'md', 'js', 'ts', 'jsx', 'tsx', 'svg'],
    },
  },
} as UserConfig);
