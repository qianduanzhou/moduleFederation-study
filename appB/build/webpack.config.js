const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'appB',
            remotes: {
                appA: "appA@http://127.0.0.1:5500/appA/dist/appA.js",
            },
        })
    ],
};