const path = require('path');


module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    externals: {
        react: 'react'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader', 
                  'css-loader',   
                  'sass-loader'   
                ]
              },
              {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader']
              }
        ],
    }
}