# Jekyll-Paper

![Jekyll-Paper](./favicon.ico)

[English](./README.md) | 简体中文

Jekyll Paper是一个依照纸质书籍排版设计的Jekyll主题，它旨在于帮助你以最方便最快捷的方式创建自己的博客。Jekyll Paper的设计风格以简洁为主，仿照书本的排版设计，使读者能专注于文章的阅读。

Jekyll Paper for Github是Jekyll Paper为Github Pages所提供依赖制作的版本，可查看[Jekyll Paper for Github][jekyll-paper-github]项目了解更多。

## 特色

- 响应式设计
- 分页
- RSS
- Sitemap
- 自定义404页面
- 分类目录索引
- SASS
- 可配置菜单栏
- 国际化
- SEO优化
- 数学公式支持 (MathJax)
- 图表支持 (Mermaid)
- 评论支持 (Disqus)

## 如何使用

Jekyll Paper的使用方法十分简单，只需要简单的几步即可创建自己的博客：

1. `$ gem install bundler jekyll`
2. `git clone git@github.com:ghosind/Jekyll-Paper.git`
3. `$ cd Jekyll-Paper`
4. `Jekyll-Paper $ bundle install`
5. `Jekyll-Paper $ bundle exec jekyll serve`

## 发布新的文章

在拥有一个Jekyll博客后，随时可以发布新的文章以及进行修改、删除等操作。发布新的文章只需要进入_posts文件夹，以类似于2018-03-21-xxx.md的命名风格创建一个新的文件即可。文章内容需要使用Markdown进行编写，且在头部需要设置部分信息，具体可参考_posts文件夹中现有文件或参考Wiki中其它文档。

## 自定义导航栏

你可以在`_data/menus.yml`文件中增加或修改导航栏内容，导航栏每个链接配置需要包括名称与URL，具体配置可参照下方。

### 导航栏配置示例

```yml
- title: "Index"
  url:   ""

- title: "Github"
  absoluteUrl: true
  url: "https://github.com/john_doe"

- title: "About"
  url:   "about"
```

## 支持的语言列表

Jekyll Paper目前支持下列语言，欢迎参与提高翻译质量及增加更多语言。请在`_config.yml`文件中设置`language`的值，其默认值为`en`（`language: en`）。

- 简体中文
- 繁體中文
- English (英语)
- Español (西班牙语)
- Français (法语)
- Deutsche (德语)
- 日本語 (日语)
- Português (葡萄牙语)

## 预览

首页：

![Index](./assets/images/index-screenshot.png)

文章页：

![Post](./assets/images/post-screenshot.png)

分类目录页：

![Category](./assets/images/category-screenshot.png)

移动版首页：

![Mobile](./assets/images/mobile-screenshot.png)

## 许可

Jekyll Paper通过MIT许可发布。

## 参与项目

如果您想参与Jekyll Paper的开发，可以在Fork后提交新的PR。

若您有任何建议或者意见，可在[Jekyll Paper Issues][jekyll-paper-issues]发布。

[jekyll-paper]: https://github.com/ghosind/Jekyll-Paper
[jekyll-paper-github]: https://github.com/ghosind/Jekyll-Paper-Github
[jekyll-paper-issues]: https://github.com/ghosind/Jekyll-Paper/issues
