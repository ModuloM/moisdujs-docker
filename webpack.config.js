var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            containers: 'src/containers',
            components: 'src/components',
            reducers: 'src/reducers',
            constants: 'src/constants',
            store: 'src/store',
            actions: 'src/actions'
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                mimetype: 'application/font-woff'
            }
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                mimetype: 'application/application/octet-stream'
            }
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                mimetype: 'application/image/svg+xml'
            }
        }]
    }
};
