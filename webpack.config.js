const path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /fonts$/,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "postcss-loader"
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use: 'file-loader?name=fonts/[name].[ext]!static'
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },
    optimization: { splitChunks: { chunks: "all" } },
    devServer: {
        contentBase: "./dist",
        hot: true,
        open: true
    }
}