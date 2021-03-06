const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    devtool: 'eval',
    // entry: './src/app.js',
    // entry: { app:'./src/app.js' },
    // entry: ['./src/app.js', './src/sub.js'], // 依存していない状態
    entry: {
        app: './src/app.js', // エントリーポイント追加
        sub: './src/sub.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[contenthash].[ext]',
                            outputPath: 'images',
                            publicPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css'
        }),
    ]
}