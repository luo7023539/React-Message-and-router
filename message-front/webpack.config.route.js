module.exports = {
    entry: './app/index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                loader:'style!css'
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)/,
                loader:'file!url'
            }
        ]
    }

};

