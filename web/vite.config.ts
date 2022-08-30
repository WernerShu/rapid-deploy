import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from "path";
import commpressPlugin from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), commpressPlugin({
        verbose: true, // 默认即可
        disable: false, // 开启压缩(不禁用)，默认即可
        deleteOriginFile: false, // 删除源文件
        threshold: 10240, // 压缩前最小文件大小
        algorithm: 'gzip', // 压缩算法
        ext: '.gz' // 文件类型
    }), visualizer() // 依赖分析
    ],
    resolve: {
        alias: {
            '@': join(__dirname, "src"),
            '#': join(__dirname, "types"),
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // 两种方式都可以
                additionalData: '@use "@/style/global/index.scss" as *;'
            }
        }
    },
})
