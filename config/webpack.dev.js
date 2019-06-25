const path = require('path')
const webpack = require('webpack')
const uglify = require('uglifyjs-webpack-plugin');//js压缩插件
const htmlPlugin = require('html-webpack-plugin')//html打包插件
const extractTextPlugin = require('extract-text-webpack-plugin')//css 分离
var website = {
    publicPath:'http://localhost:8888'
}
module.exports = {
    mode:'development',
    //入口文件配置项
    entry:{
        main:'./src/main.js'
    } ,
    //出口文件配置项
    output:{
        //打包的路径
        path: path.resolve(__dirname, '../dist'),
        //打包的文件名称
        filename: 'bundle.js',
        publicPath: website.publicPath  //publicPath：主要作用就是处理静态文件路径的。
    },
    //模块
    module:{
        rules:[
            //css loader
            {
                test:/\.css$/,
                use:extractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
                // use:[
                //     {loader:'style-loader'},
                //     {loader:'css-loader'}
                // ]
            },
            //图片 loader
            {
                test: /\.(png|jpg|gif|jpeg)/,//是匹配图片文件后缀名称
                use:[{
                    loader: 'url-loader',//是指定使用的loader和loader的配置参数
                    options:{
                        limit: 500,  //是把小于500B的文件打成Base64的格式，写入JS
                        outputPath: 'images/',   //打包后的图片放到images文件夹下
                    }
                }]
            },
            //
            {
                test:/\.(htm|html)$/i,
                use:['html-withimg-loader']
            },
            //less loader
            {
                test:/\.less$/,
                use: extractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
                // use:[{
                //     loader:'style-loader'
                // },{
                //     loader:'css-loader'
                // },{
                //     loader:'less-loader'
                // }]
            },
            //scss loader
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
                // use: [{
                //     loader: "style-loader" // creates style nodes from JS strings
                // }, {
                //     loader: "css-loader" // translates CSS into CommonJS
                // }, {
                //     loader: "sass-loader" // compiles Sass to CSS
                // }]
            }
        ]
    },
    //插件
    plugins:[
        new uglify(),   //js压缩插件
        new htmlPlugin({
            minify: {    //是对html文件进行压缩
                removeAttributeQuotes: true  //removeAttrubuteQuotes是却掉属性的双引号。
            },
            hash: true,  //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template: './src/index.html' //是要打包的html模版路径和文件名称。
        }),
        new extractTextPlugin('css/index.css')  //这里的/css/index.css 是分离后的路径
    ],
    //配置webpack开发服务功能
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'../dist'),
        //设置服务器的ip地址，可以使用ip，也可以使用localhost
        host :'localhost',
        //服务器压缩是否开启
        compress:true,
        //配置服务端口号
        port : 8888
    }
}