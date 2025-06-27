import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import AutoImport from 'unplugin-auto-import/vite';
export default defineConfig({
    plugins: [solid(), AutoImport({ imports: ['solid-js'] })],
    resolve: {
        alias: {
            '@': '/src',
            '@plugin': '/src/pages/tool/plugins/components',
            '@p/': '../../packages/',
            '@b/': '../../backend/'
        }
    },
    server: {
        proxy: {
            '/api': 'http://127.0.0.1:9000'
        }
    }
});
