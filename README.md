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
7. git-cz
8. changelog




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
