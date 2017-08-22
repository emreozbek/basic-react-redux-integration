var port = 3000;
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:' + port,
        "./src/Index.js"
    ],
    output: {
        filename: "./build/bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'es2015','react','stage-0']
                }
            }
        }]
    },
    devServer: {
        contentBase: './build',
        watchContentBase: true,
        port: port,
        inline: true
    }
}