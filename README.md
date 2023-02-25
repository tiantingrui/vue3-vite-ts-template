# noah-cli template

> 项目介绍
基于 vue3 + vite + ts 快速生成项目

> 集成规范
1. eslint 
2. prettier
3. editorConfig
4. stylelint
    ```shell
    devDependencies:
        + postcss 8.4.21  转换 css 代码工具
        + postcss-html 1.5.0  识别 html/vue 中的 <style></style> 标签中的样式
        + postcss-scss 4.0.6  识别 scss 语法的插件
        + stylelint 15.2.0  css 样式 lint 工具, 用户检测样式文件(.css文件)
        + stylelint-config-prettier 9.0.5 关闭所有不必要或可能与 Prettier 冲突的规则
        + stylelint-config-recommended-scss 9.0.1  scss的推荐可共享配置规则，详细可查看官方文档
        + stylelint-config-standard 30.0.1  Stylelint的标准可共享配置规则，详细可查看官方文档
        + stylelint-config-standard-vue 1.0.0  lint.vue文件的样式配置
        + stylelint-order 6.0.2   指定样式书写的顺序，在 .stylelintrc.js 中 order/properties-order 指定顺序
        + stylelint-scss 4.4.0  stylelint-config-recommended-scss 的依赖，scss 的 stylelint 规则集合
    ```
5. husky
   1. 添加 pre-commit 钩子 执行 lint:fix 和 format 操作
6. 配置 commitlint 校验提交信息
   1. 添加commitlint.config.js配置文件
   2. 添加commit-msg githook钩子
    > https://commitlint.js.org/#/guides-local-setup
<!-- todo -->
7. cz-git
   > 对比各种 commit 工具， cz-git 最优，体积依赖最小 https://cz-git.qbb.sh/guide/why
   > 使用介绍：https://cz-git.qbb.sh/guide/
8. changelog

### commitizen
> npm install -g commitizen cz-conventional-changelog
> echo '{"path": "cz-conventional-changelog"}' > ~/.czrc

### 自定义文档格式
> cz-customizable


### 自动化包版本控制和changelog
> release-it
1. 根据 git commit 生成版本号
2. 自动生成 changelog
3. 丰富的hooks用来定制发版逻辑
4. 提供插件机制，高度可扩展

我们的期望：
1. 自动生成changelog
2. 根据git commit msg 选择版本
3. 可以手动发布 pre-release 版本
4. npm 发版后自动打 tag

### .npmrc
> npm config rule
```
.npmrc 的优先级
1. 每个项目的配置文件
2. 每个用户的配置文件 （~/.npmrc）
3. 全局的配置文件 （$PREFFIX/etc/npmrc）
4. npm 内置的配置文件（path/to/npm/npmrc）

```
常用的配置项
```
cache = '~/.npm'                            # 缓存位置
engine-strict = false                       # 严格限制node版本
https-proxy = null                          # npm 网络操作的代理
package-lock = true                         # 使用 package-lock.json
register = 'https://registry.npmjs.org'     # npm 仓库地址，尤其对自建仓库的Team很有用

### 重要设置指定包到私服npm下载
### 可以指定特殊的命名空间（scope）的来源
register = 'https://registry.npmjs.org'   
@noah:registry = https://npm.xx.com  
###  @noah 开头的包从 registry=https://npm.xx.com 这里下载，其余全去npm官方源下载

```


> script
```json
"scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "eslint": "eslint . --ext .js,.jsx,.ts,.tsx,.vue",
    "eslint:fix": "eslint . --fix --ext .js,.jsx,.ts,.tsx,.vue",
    "stylelint": "stylelint \"./**/*.{css,scss,sass,vue,html}\"",
    "stylelint:fix": "stylelint \"./**/*.{css,scss,sass,vue,html}\" --fix",
    "lint": "pnpm run eslint & pnpm run stylelint",
    "lint:fix": "npm run eslint:fix & npm run stylelint:fix",
    "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\""
  },
```
+ eslint 使用 eslint 检测项目中的 vue、js、jsx、ts、tsx 代码。
+ eslint：fix 脚本代码格式化，一般搭配 eslint 命令使用。
+ stylelint 使用 stylelint 检测项目中的样式文件和其他样式规则的书写
+ stylelint：fix 样式代码格式化，一般搭配 stylelint 命令使用。
+ lint 同时检测样式代码和脚本代码(相当于同时执行了eslint和stylelint)。
+ lint：fix 代码格式化，一般搭配 lint 命令使用。
