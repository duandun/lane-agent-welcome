import { defineConfig } from 'vite';
import { devtools } from '@tanstack/devtools-vite';

import { tanstackStart } from '@tanstack/react-start/plugin/vite';

import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { nitro } from 'nitro/vite';

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [devtools(), nitro(), tailwindcss(), tanstackStart(), viteReact()],
  build: {
    rolldownOptions: {
      onLog(level, log, handler) {
        // 依赖里标记客户端的 "use client" 在非 RSC 应用里没有语义，
        // 这些打包提示只会反复出现，直接过滤掉。
        const text = `${log.id ?? ''} ${log.message}`;
        if (log.code === 'MODULE_LEVEL_DIRECTIVE' && text.includes('node_modules')) {
          return;
        }
        handler(level, log);
      },
    },
  },
});

export default config;
