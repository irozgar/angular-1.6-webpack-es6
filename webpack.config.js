const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    entry: {
        app: './src/app/app.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    devtool: 'source-maps',
    devServer: {
        contentBase: './dist',
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /index\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: 'src/app'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src', 'link:href'],
                            interpolate: true
                        }
                    }
                ]

            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};

module.exports = webpackConfig;
