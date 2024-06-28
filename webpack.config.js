const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    devtool:"cheap-module-source-map",
    entry: {
        popup: path.resolve('src/popup/popup.tsx'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {   
                use: ['style-loader', 'css-loader'],
                test: /\.css$/i,
               
            },
        ]
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            {
                from: path.resolve('src/manifest.json'),
                to: path.resolve('dist'),
            },
            {
                from: path.resolve('src/static/'),
                to: path.resolve('dist'),
            }
          ],
        }),
        ...getHtmlPlugins([
            'popup',
          ]),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',  
    },
}

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlPlugin({
      title: 'Trigvent WAmessanger',
      filename: `${chunk}.html`,
      chunks: [chunk],
    }))
  }
