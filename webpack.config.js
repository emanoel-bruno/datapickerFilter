const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

process.traceDeprecation = true;

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index'),
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                extractComments: 'all',
                terserOptions: {
                    compress: true,
                    output: null
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    safe: true,
                    discardComments: {
                        removeAll: true,
                    },
                },
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template : path.join(__dirname, 'src/index.ejs'),
            filename : 'index.html',
            title: 'Events',
            inject: 'body',
            minify   : {
                html5                          : true,
                collapseWhitespace             : true,
                minifyCSS                      : true,
                minifyJS                       : true,
                minifyURLs                     : false,
                removeAttributeQuotes          : true,
                removeComments                 : true,
                removeEmptyAttributes          : true,
                removeRedundantAttributes      : true,
                removeScriptTypeAttributes     : true,
                removeStyleLinkTypeAttributese : true,
                useShortDoctype                : true
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: ['popper.js', 'default']
        }),
        new CompressionPlugin({
            test: /\.(js|css)/
        }),
        new TerserPlugin(),
    ],
    watch: true,
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                },,
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.85, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    
                ]
            },
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|ttf|otf|eot|woff2|svg)$/i,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.scss','html', 'ejs']
    },
    devtool: 'source-map',
};