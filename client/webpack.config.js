const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'app.min.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /nodue_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\main.scss$/,
                use: [
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
            // {
            //     test: /\.scss$/,
            //     use: [
                    
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]
}