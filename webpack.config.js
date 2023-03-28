const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const sitemap = require("./sitemap.config");
let copyConfig = {
    patterns: [
        {
            from: "./src/assets",
            to: "assets",
        },
    ],
};

let config = {
    module: {
        rules: [
            { test: /\.html$/, loader: "handlebars-loader" },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                        },
                    },

                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        static: "./dist",
        hot: true,
    },
    plugins: [
        new LiveReloadPlugin({
            appendScriptTag: true,
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new CopyWebpackPlugin(copyConfig),
    ],
};

for (let i = 0; i < sitemap.files.length; i++) {
    const file = sitemap.files[i];
    config.plugins.push(
        new HtmlWebPackPlugin({
            template: file.templatePath,
            path: path.join(__dirname, "dist"),
            filename: file.filename,
        })
    );
}

module.exports = config;
