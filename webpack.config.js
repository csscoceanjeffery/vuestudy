const path = require('path');
const VueLoadPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    stats: { children: false },
    plugins: [
        new VueLoadPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "项目模板"
        })
    ]
};