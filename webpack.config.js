var path = require('path');
var webpack = require('webpack');
var FlowtypePlugin = require('flowtype-loader/plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        historyApiFallback: true,
        proxy: [{
            path: '/api/*',
            target: 'http://localhost:3001'
        }]
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: "flowtype",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.jsx?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new FlowtypePlugin()
    ]
};
