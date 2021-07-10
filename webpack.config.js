const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    // entry: './src/app.js',
    entry: { app:'./src/app.js' },
    // entry: ['./src/app.js', './src/sub.js'], // 依存していない状態
    // entry: {
    //     app: './src/app.js', // 分割して出力
    //     sub: './src/sub.js'
    // },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}