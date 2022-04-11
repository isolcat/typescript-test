// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// webpack中的所有配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',
    // 指定打包文件所在的目录
    output: {
        // 指定打包后的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的名字
        filename: 'bundle.js'
    },
    // 指定webpack打包要使用的模块
    module: {
        // 指定加载的规则
        rules: [{
            // test指定的是规则生效的文件
            test: /\.ts$/,
            use: 'ts-loader',
            // 要排除的文件(一般是排除掉node_modules中的文件，因为太大了 后续如果需要加载的话也可以用配置文件加载)
            exclude: /node_modules/
        }]
    },
    // 配置webpack插件
    plugins: [
        // 自动生成html文件，并且引入相关的资源
        new HTMLWebpackPlugin(options = {
            title: "这是一个自定义的title",
        }),
        // 清除打包目录
        new CleanWebpackPlugin()
    ]
}