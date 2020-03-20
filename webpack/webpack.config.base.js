const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: "./src"
    },
    output: {
        path: path.join(process.cwd(), "/dist"),
        filename: "[name].js",
        chunkFilename: "[id].js",
        library: "react-paginator",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    externals: /^[^\.]/,
    resolve: {
        extensions: [".js", ".jsx", ".scss"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    "babel-loader",
                    {
                        loader: "eslint-loader",
                        options: { emitWarning: true, failOnError: true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    "postcss-loader",
                    "sass-loader",
                    {
                        loader: "file-prepend-loader",
                        options: {
                            path: `src/scss/variables.scss`
                        }
                    }
                ]
            }
        ]
    }
};