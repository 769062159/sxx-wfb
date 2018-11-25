const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill','./src/index.js'],

    output: {
        filename: '[name].[chunkHash:5].js',
        path: path.resolve(__dirname, '../dist')
    },
    module:{
        rules:[
            {
                test: /\.(jsx|js)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(woff|eot|TTF|svg|png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '1024',
                            outputPath: 'images'
                        }
                    },
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: '1024'
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '科技服务创新券',
            template: path.resolve(__dirname,'../public/index.html')
        })
    ]
};