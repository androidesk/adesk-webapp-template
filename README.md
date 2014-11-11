adesk-webapp-template
=====================

安卓壁纸前端开发模板


## webapp-template 包含

- gruntjs 自动构建任务
- bower 第三方库的管理`

## webapp-template 依赖

- [nodejs](http://nodejs.org)
- [gruntjs](http://gruntjs.org)
- [bower](http://bower.io)
- [less](http://lesscss.net)

## webapp-template 目录结构


```
    
    ├── css                      // 生产环境css     
    ├── img                      // 生产环境图片
    ├── index.html               // 测试html
    ├── js                       // 生产环境js
    ├── lib                      // 第三方库
    ├── README.md                
    └── src                      // 源文件
        ├── bower_components     // bower 管理的组件包,由 bower 自动生成
        ├── bower.json           // bower 包管理的配置文件
        ├── css                  // less 源文件 
        ├── Gruntfile.js         // gruntjs 配置文件
        ├── js
        ├── node_modules         // gruntjs 的 npm 包,由 gruntjs 自动生成
        └── package.json         // gruntjs 的说明文件

```


## 如何使用

**注意**：如果安装因权限而失败请使用sudo

### 安装 nodejs

```sh
    
    curl http://nodejs.org/dist/v0.10.26/node-v0.10.26.tar.gz > node.tar.gz
    tar xvfz node.tar.gz
    cd node/
    sudo make install

```

### 安装 gruntjs


先卸载全局的grunt

```

    npm uninstall -g grunt

```

安装命令grunt工具

```shell

    npm install -g grunt-cli

```

然后安装grunt到用户目录

**注意**：grunt的版本必须是0.4及以上的

```shell

    npm install grunt

```


### 安装bower


```
    npm install bower -g 

```


### 开发

#### 使用bower 安装第三方依赖库

```
    bower install jquery

```

#### 使用gruntjs 进行任务构建

首次使用需要下载gruntjs的任务包，在src目录下执行

```
    npm install 

```

任务包完成之后就可以进行一次任务构建了,在src 目录下执行

```
    grunt

```

该命令将会把js和css源文件编译和执行并压缩打包到生产环境目录,会把第三方库自动复制到生产环境目录


如果需要文件进行即使编译和执行，可以在src目录下执行

```
    grunt watch    

```

该命令会监测文件的改动并自动执行任务构建，方便第一时间查看变化


### 提交你的贡献

欢迎对此模板贡献你的想法的和代码
