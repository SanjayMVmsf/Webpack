const path = require("path")
const htmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    entry:{
        main:path.resolve(__dirname,'./src/Calculator.ts')
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: `[name].[contenthash].js`,
    },
    plugins:[
        new htmlWebPackPlugin({
            template: path.resolve(__dirname, "./template.html"),
        }),
        new MiniCssExtractPlugin({
            filename: `[name].[contenthash].css`,
        })
    ],
    mode:"development",
    optimization: {
        splitChunks: {
            name: false,
            chunks: "all",
            minSize: 0.5e3,
        }
    },
    module: {
        rules: [
           {
                test:  /\.css$/i,
                use: [
                     MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.ts$/,
                use: "ts-loader"
                
            }
        ]
    },
}