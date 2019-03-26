const fs = require('fs')
const webpack = require('webpack')

module.exports = {
    baseUrl: './',
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                "windows.jQuery":"jquery"
            })
        ]
    },
    devServer: {
        // host: 'localhost',
        historyApiFallback: true,
        open: true,
        port: 8080,
        hot: false,
        inline: true,
        proxy: {
            '/api': {
                // 目标 API 地址
                target: 'https://t.doctorlinked.com/survey_service/',
                // 如果要代理 websockets
                // ws: true,
                // 将主机标头的原点更改为目标URL
                changeOrigin: true,
                pathRewrite:{  // 路径重写，
                    '^/api': ''
                }
            }
        }
    }
}