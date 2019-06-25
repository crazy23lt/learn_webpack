# 对 [Package.json](https://www.cnblogs.com/whkl-m/p/6617540.html "title text") 的 理解和学习

*   <strong>npm install </strong>
    - 自动将package.json中的模块安装到node-modules文件夹下
*   <strong>npm init</strong>
    - 自动生成的package.json
*   <strong>scripts </strong>
    - 指定了运行脚本命令的npm命令行缩写
*   <strong>dependencies </strong>
    - 项目运行所依赖的模块  --save
*   <strong>devDependencies </strong>
    - 项目开发所需要的模块  --save-dev
*   <strong>config</strong>
    - config字段用于向环境变量输出值
*   <strong>engines </strong>
    - 指明了该项目所需要的node.js版本
*   <strong>bin</strong>
    - 许多包有一个或多个可执行文件希望被安装到系统路径

# 对 [webpack4](https://www.jianshu.com/p/6712e4e4b8fe "入门配置") 的 理解和学习
*   <strong>cnpm install webpack -g</strong>
*   <strong>cnpm install webpack-cli -g</strong>
*   <strong>cnpm install webpack-dev-server -g -g</strong>
    - webpack4.x中打包默认找src/index.js作为默认入口，可以直接在终端中输入命令webpack 将当前的内容进行一个简单的打包
# nodejs模块中[exports和module.exports](https://www.jianshu.com/p/6712e4e4b8fe "细究")的区别