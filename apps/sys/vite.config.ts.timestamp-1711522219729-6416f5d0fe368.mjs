// vite.config.ts
import { defineConfig } from "file:///F:/somereact/solidt/node_modules/.pnpm/vite@5.1.5_@types+node@20.11.25/node_modules/vite/dist/node/index.js";
import solid from "file:///F:/somereact/solidt/node_modules/.pnpm/vite-plugin-solid@2.10.1_solid-js@1.8.15_vite@5.1.5/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import AutoImport from "file:///F:/somereact/solidt/node_modules/.pnpm/unplugin-auto-import@0.17.5/node_modules/unplugin-auto-import/dist/vite.js";
var vite_config_default = defineConfig({
  plugins: [solid(), AutoImport({ imports: ["solid-js"] })],
  resolve: {
    alias: {
      "@": "/src",
      "@p/": "../../packages/"
    }
  },
  server: {
    proxy: {
      "/api": "http://127.0.0.1:7001"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxzb21lcmVhY3RcXFxcc29saWR0XFxcXGFwcHNcXFxcc3lzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxzb21lcmVhY3RcXFxcc29saWR0XFxcXGFwcHNcXFxcc3lzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9zb21lcmVhY3Qvc29saWR0L2FwcHMvc3lzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBzb2xpZCBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtzb2xpZCgpLCBBdXRvSW1wb3J0KHsgaW1wb3J0czogWydzb2xpZC1qcyddIH0pXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6ICcvc3JjJyxcbiAgICAgICdAcC8nOiAnLi4vLi4vcGFja2FnZXMvJ1xuICAgIH1cbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgICcvYXBpJzogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMSdcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdSLFNBQVMsb0JBQW9CO0FBQzdTLE9BQU8sV0FBVztBQUNsQixPQUFPLGdCQUFnQjtBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLFdBQVcsRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ3hELFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
