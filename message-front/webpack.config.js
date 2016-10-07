module.exports = {
    entry:'./src/index.js',
    output:{
        path:'./build',
        filename:'./bundle.js'
    },
    devServer:{
      contentBase: './build'
    },
    resolve:{
          extensions:["",".js",".jsx"]
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