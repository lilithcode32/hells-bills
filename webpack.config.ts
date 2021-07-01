import path                       from 'path';
import webpack, {Configuration}   from 'webpack';
import HtmlWebpackPlugin          from 'html-webpack-plugin';
import {TsconfigPathsPlugin}      from 'tsconfig-paths-webpack-plugin';

const webpackConfig = (env): Configuration => ({
    entry  : './src/index.tsx',
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        //TODO waiting on https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/61
        //@ts-ignore
        plugins: [new TsconfigPathsPlugin()]
    },
    output : {
        path    : path.join(__dirname, '/dist'),
        filename: 'build.js'
    },
    module : {
        rules: [
            {
                test   : /\.tsx?$/,
                loader : 'ts-loader',
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            },
            {
                test: /\.css$/,
                use : [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
});

export default webpackConfig;
