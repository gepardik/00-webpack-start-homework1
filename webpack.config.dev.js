const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        hot: true,
        port: 9000,
    },
    plugins: [
        new ESLintPlugin({})
    ],
})